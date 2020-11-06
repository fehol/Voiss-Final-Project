import Layout from '../components/Layout';
import { css } from '@emotion/core';
// import { Fragment } from 'react';

const sectionStyle = css`
  display: flex;
  float: right;
  width: 85%;
  height: 100vh;
  padding-left: 113px;
  padding-top: 20px;
  text-align: center;
`;

const flipBox = css`
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
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
  backface-visibility: hidden;
  background-color: #2f3858;
  color: black;
`;

const flipBoxBack = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
`;

export default function Service() {
  return (
    <Layout>
      <section css={sectionStyle}>
        <div css={flipBox}>
          <div css={flipBoxInner}>
            <div css={flipBoxFront}>
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
              <h2>Front Side</h2>
            </div>
            <div css={flipBoxBack}>
              <h2>Back Side</h2>
            </div>
          </div>
        </div>
        <div css={flipBox}>
          <div css={flipBoxInner}>
            <div css={flipBoxFront}>
              <h2>Front Side</h2>
            </div>
            <div css={flipBoxBack}>
              <h2>Back Side</h2>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
