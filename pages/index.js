// import Link from 'next/link';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
// import { Fragment } from 'react';

const logoStyle = css``;

const h1Style = css`
  padding-top: 2rem;
`;

const audioBox = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15rem;
  justify-content: space-between;
  align-items: center;
  audio {
    -webkit-transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear;
    -moz-box-shadow: 2px 2px 4px 0px #006773;
    -webkit-box-shadow: 2px 2px 4px 0px #006773;
    box-shadow: 2px 2px 4px 0px #006773;
    -moz-border-radius: 7px 7px 7px 7px;
    -webkit-border-radius: 7px 7px 7px 7px;
    border-radius: 7px 7px 7px 7px;
  }
`;

const playerBox = css`
  background-color: none;
  &:hover {
    -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }
  &:focus {
    -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }
  &:active {
    -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.6);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

const h4Style = css`
  font-size: 1rem;
  color: #f1d74c;

  a {
    text-decoration: none;
    color: #f1d74c;
    text-decoration: underline;
  }
`;

const inputStyle = css`
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 5rem;
  input {
    padding: 8px;
    width: 300px;
    border: 0;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
  }
`;

export default function Home() {
  return (
    <Layout>
      <div css={logoStyle}>
        <h1 css={h1Style}>
          <img src="/Logo/Logo.svg" alt="VossLogo" />
        </h1>
      </div>
      <div>
        <div css={audioBox}>
          <audio controls css={playerBox}>
            <source src="/voice/demo1.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/demo1.wav" /> The Audio
            doesnt work with your browser
          </audio>
          <audio controls css={playerBox}>
            <source src="/voice/demo1.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/demo1.wav" /> The Audio
            doesnt work with your browser
          </audio>
          <audio controls css={playerBox}>
            <source src="/voice/demo1.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/demo1.wav" /> The Audio
            doesnt work with your browser
          </audio>
          <audio controls css={playerBox}>
            <source src="/voice/demo1.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/demo1.wav" /> The Audio
            doesnt work with your browser
          </audio>
          <audio controls css={playerBox}>
            <source src="/voice/demo1.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/demo1.wav" /> The Audio
            doesnt work with your browser
          </audio>
          <audio controls css={playerBox}>
            <source src="/voice/demo1.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/demo1.wav" /> The Audio
            doesnt work with your browser
          </audio>
        </div>
        <div>
          <h1 css={h4Style}>I also have a newsletter!</h1>
          <h4 css={h4Style}>
            It includes information about my projects and my Youtube channel{' '}
            <a href="https://www.youtube.com/channel/UC3Gr3vqGHZxMKNY26t0QUDg">
              Trilogy Trio!
            </a>
          </h4>
        </div>
        <div css={inputStyle}>
          <input type="text" placeholder="Email" />
        </div>
      </div>
    </Layout>
  );
}
