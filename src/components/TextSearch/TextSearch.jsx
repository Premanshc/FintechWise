import React, { useState } from 'react';
import axios from 'axios';
import './TextSearch.css';

const TextSearch = () => {
  const [question, setQuestion] = useState('');
  const [text, setText] = useState('');

  const searchQuery = async () => {
    var config = {
      headers: {"X-Ngrok-Skip-Browser-Warning": "abc123abc123"}
  };
    try {
      const response = await axios.get(
        'http://3808-34-135-81-85.ngrok-free.app/',config
      );
      setText(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className="textsearch">
        <h1>Ask Your Question Here</h1>

        <form>
          <div className="entry">
            <textarea
              type="text"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
            <button type="button" onClick={searchQuery}>
              Go
            </button>
          </div>
        </form>

        <div className="result">
          <h2>{text}</h2>
        </div>
      </div>
    </>
  );
};

export default TextSearch;
