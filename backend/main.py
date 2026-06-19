from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from transformers import pipeline

app = FastAPI(title="TEXT-HEILPER API")

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 요약 모델 초기화 (경량 모델 - 약 500MB)
summarizer = pipeline("summarization", model="facebook/bart-base")

class TextRequest(BaseModel):
    text: str
    max_length: int = 150
    min_length: int = 50

class SummaryResponse(BaseModel):
    original_text: str
    summary: str
    length_ratio: float

@app.get("/")
async def root():
    return {"message": "TEXT-HEILPER API에 오신 것을 환영합니다!", "status": "running", "model": "facebook/bart-base"}

@app.post("/summarize", response_model=SummaryResponse)
async def summarize(request: TextRequest):
    """
    텍스트를 요약합니다.
    """
    try:
        # 텍스트 길이 체크 (최소 50자)
        if len(request.text) < 50:
            return {
                "original_text": request.text,
                "summary": "텍스트가 너무 짧습니다. 최소 50자 이상의 텍스트를 입력해주세요.",
                "length_ratio": 0
            }
        
        # AI 요약 수행
        result = summarizer(request.text, max_length=request.max_length, min_length=request.min_length, do_sample=False)
        summary_text = result[0]["summary_text"]
        
        # 길이 비율 계산
        length_ratio = len(summary_text) / len(request.text)
        
        return {
            "original_text": request.text,
            "summary": summary_text,
            "length_ratio": round(length_ratio, 2)
        }
    except Exception as e:
        return {
            "original_text": request.text,
            "summary": f"오류 발생: {str(e)}",
            "length_ratio": 0
        }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "TEXT-HEILPER"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
