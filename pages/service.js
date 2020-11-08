import Layout from '../components/Layout';
import { css } from '@emotion/core';
// import { Fragment } from 'react';

const section1Style = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  padding-left: 0px;
  padding-top: 5rem;
  text-align: center;
`;

const flipBox = css`
  background-color: transparent;
  width: 300px;
  height: 200px;
  border-radius: 30%;
  border: none;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
`;

const flipBoxInner = css`
  position: relative;

  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;

  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const flipBoxFront = css`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30%;
  backface-visibility: hidden;
  background-color: #707070;

  color: black;
`;

const flipBoxBack = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #8a6e6e;
  color: white;
  border-radius: 30%;
  transform: rotateY(180deg);
`;

const section2Style = css`
  margin-bottom: 5rem;
`;

export default function Service() {
  return (
    <Layout>
      <section css={section1Style}>
        <div css={flipBox}>
          <div css={flipBoxInner}>
            <div css={flipBoxFront}>
              <br />
              <h2>Voice Over Rates</h2>
            </div>
            <div css={flipBoxBack}>
              <h2>Back Side</h2>
            </div>
          </div>
        </div>
        <div css={flipBox}>
          <div css={flipBoxInner}>
            <div css={flipBoxFront}>
              <br />
              <h2>English Conversation Classes</h2>
            </div>
            <div css={flipBoxBack}>
              <h2>Back Side</h2>
            </div>
          </div>
        </div>
        <div css={flipBox}>
          <div css={flipBoxInner}>
            <div css={flipBoxFront}>
              <br />
              <h2>One-on-one English Conversation</h2>
            </div>
            <div css={flipBoxBack}>
              <h2>Back Side</h2>
            </div>
          </div>
        </div>
      </section>
      <section css={section2Style}>
        <h4>Keith provides services for these types of projects:</h4>
        <ul>
          <li>Commercials</li>
          <li>Trailers</li>
          <li>Promotions</li>
          <li>Charakters</li>
          <li>Corporate</li>
          <li>Documentary</li>
          <li>eLearning</li>
          <li>Explainer Videos</li>
          <li>Internet Web</li>
          <li>Narration</li>
          <li>Video Games</li>
          <li>Tours</li>
          <li>Announcments</li>
        </ul>
      </section>
    </Layout>
  );
}
