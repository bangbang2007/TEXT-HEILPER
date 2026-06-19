import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lengthRatio, setLengthRatio] = useState(0);

  const API_BASE_URL = 'http://localhost:8000';

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      setError('텍스트를 입력해주세요.');
      return;
    }

    setLoading(true);
    setError('');
    setSummary('');

    try {
      const response = await axios.post(`${API_BASE_URL}/summarize`, {
        text: inputText,
        max_length: 150,
        min_length: 50
      });

      setSummary(response.data.summary);
      setLengthRatio(response.data.length_ratio);
    } catch (err) {
      setError('요약 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    alert('복사되었습니다!');
  };

  const handleClear = () => {
    setInputText('');
    setSummary('');
    setError('');
    setLengthRatio(0);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>📖 TEXT-HEILPER</h1>
        <p>AI 기반 텍스트 요약 서비스</p>
      </header>

      <main className="container">
        <div className="input-section">
          <h2>📝 텍스트 입력</h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="요약하고 싶은 긴 텍스트를 여기에 입력하세요..."
            rows="8"
            className="input-textarea"
          />
          <p className="char-count">글자 수: {inputText.length}자</p>
        </div>

        <div className="button-group">
          <button
            onClick={handleSummarize}
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? '요약 중...' : '✨ 요약하기'}
          </button>
          <button onClick={handleClear} className="btn btn-secondary">
            🗑️ 초기화
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {summary && (
          <div className="output-section">
            <h2>📌 요약 결과</h2>
            <div className="summary-info">
              <p>요약율: {(lengthRatio * 100).toFixed(1)}%</p>
            </div>
            <div className="summary-text">{summary}</div>
            <button onClick={handleCopy} className="btn btn-copy">
              📋 복사하기
            </button>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>TEXT-HEILPER © 2024 | AI 텍스트 요약 서비스</p>
      </footer>
    </div>
  );
}

export default App;
