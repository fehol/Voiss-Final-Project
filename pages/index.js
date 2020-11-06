// import Link from 'next/link';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
// import { Fragment } from 'react';

const logoStyle = css``;

const h1Style = css`
  padding-top: 5rem;
`;

const h2Style = css``;

const audioBox = css`
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rem;
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
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

const inputStyle = css`
  margin-bottom: 10rem;
`;
const h4Style = css`
  font-size: 2rem;
`;

export default function Home() {
  return (
    <Layout>
      <div css={logoStyle}>
        <h1 css={h1Style}>
          <img src="/Logo/Logo.svg" alt="VossLogo" />
        </h1>
        <h2 css={h2Style}>Voice Actor - Private Teacher</h2>
      </div>
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
        <h1>I also have a newsletter!</h1>
        <h4 css={h4Style}>
          It includes interesting stuff about my projects and my youtube channel{' '}
          <a href="https://www.youtube.com/channel/UC3Gr3vqGHZxMKNY26t0QUDg">
            Trilogy Trio
          </a>
        </h4>
        <div css={inputStyle}>
          <input type="text" />
        </div>
      </div>
    </Layout>
  );
}
