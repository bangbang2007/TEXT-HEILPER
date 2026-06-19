# TEXT-HEILPER 빠른 시작 가이드

## 🚀 설치 및 실행 방법

### 필수 사항
- Docker & Docker Compose 설치
- 또는 Python 3.11+ & Node.js 18+ (로컬 설치 시)

---

## 📦 Docker로 실행 (권장)

### 1단계: 저장소 클론
```bash
git clone https://github.com/bangbang2007/TEXT-HEILPER.git
cd TEXT-HEILPER
```

### 2단계: Docker Compose 실행
```bash
docker-compose up --build
```

### 3단계: 브라우저에서 접속
- **프론트엔드**: http://localhost:3000
- **API 문서**: http://localhost:8000/docs

---

## 💻 로컬 설치 (Python + Node.js)

### 백엔드 설정
```bash
cd backend
pip install -r requirements.txt
python main.py
```

### 프론트엔드 설정 (새 터미널)
```bash
cd frontend
npm install
npm start
```

---

## 🎯 사용 방법

1. 텍스트 입력창에 요약할 텍스트 입력 (최소 50자)
2. "✨ 요약하기" 버튼 클릭
3. AI가 자동으로 핵심 내용 요약
4. 📋 복사하기로 결과 복사 가능

---

## 📚 API 엔드포인트

### POST /summarize
요약을 요청합니다.

**요청:**
```json
{
  "text": "요약할 텍스트...",
  "max_length": 150,
  "min_length": 50
}
```

**응답:**
```json
{
  "original_text": "원본 텍스트...",
  "summary": "요약된 텍스트...",
  "length_ratio": 0.35
}
```

### GET /health
서비스 상태 확인

---

## 🛠️ 기술 스택

- **백엔드**: FastAPI, Python
- **AI 모델**: Hugging Face BART
- **프론트엔드**: React 18, Axios
- **배포**: Docker, Docker Compose

---

## 📝 프로젝트 구조

```
TEXT-HEILPER/
├── backend/
│   ├── main.py           # FastAPI 앱
│   ├── requirements.txt   # Python 의존성
│   ├── config.py         # 설정파일
│   └── Dockerfile        # Docker 설정
├── frontend/
│   ├── src/
│   │   ├── App.js        # React 메인 컴포넌트
│   │   ├── App.css       # 스타일
│   │   └── index.js      # 진입점
│   ├── public/
│   ├── package.json      # Node 의존성
│   └── Dockerfile        # Docker 설정
├── docker-compose.yml    # 서비스 orchestration
└── README.md
```

---

## ⚠️ 주의사항

- 첫 실행 시 AI 모델 다운로드 (약 1-2GB, 시간 소요)
- 최소 50자 이상의 텍스트 필요
- 긴 텍스트 요약 시 처리 시간 발생 가능

---

## 🤝 기여하기

이슈 제출 및 Pull Request는 언제든 환영합니다!

---

## 📄 라이선스

MIT License
