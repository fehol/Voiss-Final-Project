import { useState } from 'react';
import axios from 'axios';
import { css } from '@emotion/core';

const headerStyle = css`
  margin-top: 5rem;
  font-size: 1rem;
  color: #f1d74c;
  a {
    text-decoration: none;
    color: #f1d74c;
    text-decoration: underline;
    transform: transition 0.6s;
    &:hover {
      text-decoration: underline black;
    }
  }
  button {
    padding: 10px;
    &:hover {
      background-color: #f2e183;
    }
  }
`;

const inputStyle = css`
  padding: 10px;
  box-sizing: border-box;
  input {
    padding: 8px;
    width: 300px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
  }
`;

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState('LOADING');
    setErrorMessage(null);
    try {
      const response = await axios.post('/api/newsletter', { email });
      setState('SUCCESS');
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState('ERROR');
    }
  };

  return (
    <div css={headerStyle}>
      <h2>I also have a Newsletter!</h2>
      It's full of Information about my Projects and my Youtube Channel{' '}
      <a href="https://www.youtube.com/channel/UC3Gr3vqGHZxMKNY26t0QUDg">
        Trilogy Trio
      </a>
      <div>
        <br />
        <input
          css={inputStyle}
          type="email"
          placeholder="Enter your Email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="button"
          disabled={state === 'LOADING'}
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      {state === 'ERROR' && <p>{errorMessage}</p>}
      {state === 'SUCCESS' && <p>Success!</p>}
    </div>
  );
}
