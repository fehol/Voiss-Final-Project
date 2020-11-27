// import Link from 'next/link';
import { css } from '@emotion/core';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
// import { Fragment } from 'react';

const mainStyle = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const logoStyle = css``;

const h1Style = css`
  margin-top: 3rem;
`;

const h2Style = css``;

const audioBox = css`
  margin-left: 20rem;
  margin-right: 20rem;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  audio::-webkit-media-controls-panel {
    background-color: #f2e183;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    float: left;
  }
  audio {
    -webkit-transition: all 0.5s linear;
    -moz-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear;
    -moz-border-radius: 7px 7px 7px 7px;
    -webkit-border-radius: 7px 7px 7px 7px;
    border-radius: 7px 7px 7px 7px;
  }
`;

const playerBox = css`
  background-color: none;
  margin: 10px;
  &:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
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

const newsletterPosition = css`
  margin-top: 1rem;
`;

export default function Home() {
  return (
    <Layout>
      <title>Home</title>
      <main css={mainStyle}>
        <div css={logoStyle}>
          <h1 css={h1Style}>
            <img src="/Logo/Logo.svg" alt="VossLogo" />
          </h1>
          <br />
          <h2 css={h2Style}>
            <span>Voice Actor - Teacher - Podcast Host</span>
          </h2>
        </div>
        <div css={audioBox}>
          <audio controls css={playerBox}>
            <source src="/voice/Commercial.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/Commercial.wav" /> The
            Audio doesnt work with your browser
          </audio>
          <audio controls css={playerBox}>
            <source src="/voice/Trilogy.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/Trilogy.wav" /> The Audio
            doesnt work with your browser
          </audio>
          <audio controls css={playerBox}>
            <source src="/voice/Elearning.wav" type="audio/wav" />
            <track default kind="captions" src="/voice/Elearning.wav" /> The
            Audio doesnt work with your browser
          </audio>
          <div css={newsletterPosition}>
            <Newsletter />
          </div>
        </div>
      </main>
    </Layout>
  );
}
