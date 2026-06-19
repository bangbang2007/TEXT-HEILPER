# TEXT-HEILPER

AI 기반 텍스트 요약 서비스

## 📋 서비스 개요

사용자가 긴 글이나 문서를 입력하면 AI가 내용을 분석하여 핵심 내용을 간략하게 요약해 주는 서비스입니다.

## 🏗 서비스 구조

```
텍스트 입력 → AI 요약 분석 → 결과 출력
```

## 🔧 주요 기능

### 1. 텍스트 입력 (Feature 1)
- 텍스트 직접 입력
- 텍스트 붙여넣기
- 입력 내용 저장

### 2. AI 텍스트 요약 (Feature 2)
- 텍스트 분석
- 핵심 문장 추출
- 요약문 생성
- 요약 길이 조정

### 3. 결과 출력 (Feature 3)
- 원문 표시
- 요약 결과 표시
- 복사 기능
- 결과 저장

## 🚀 사용자 이용 흐름

1. 텍스트 입력
2. 요약 요청
3. AI 분석 수행
4. 요약 결과 출력
5. 결과 복사 또는 저장

## 💡 기대 효과

- 긴 문서를 빠르게 이해할 수 있음
- 핵심 내용을 효율적으로 파악 가능
- 학습 및 연구 시간 절약
- 정보 정리와 자료 분석에 도움

## 📁 프로젝트 구조

```
TEXT-HEILPER/
├── backend/          # 백엔드 (Python FastAPI)
├── frontend/         # 프론트엔드 (React)
├── ai-model/         # AI 모델 통합
├── docs/             # 문서
├── tests/            # 테스트
└── config/           # 설정 파일
```

## 🛠️ 기술 스택 (예정)

### 백엔드
- Python (FastAPI/Flask)
- NLP 라이브러리 (Hugging Face, NLTK, etc.)

### 프론트엔드
- React / Vue.js
- TypeScript
- Tailwind CSS

### 배포
- Docker
- GitHub Actions (CI/CD)

## 📝 라이센스

MIT License

## 👥 기여 가이드

각 기능은 별도의 브랜치에서 개발하고, 완료 후 Pull Request를 통해 메인 브랜치에 병합합니다.
