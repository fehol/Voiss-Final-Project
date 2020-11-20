import Layout from '../components/Layout';
import { css } from '@emotion/core';
import { SiFiverr } from 'react-icons/si';
import Link from 'next/link';
// import { Fragment } from 'react';

const mainStyle = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const section1Style = css`
  display: flex;
`;

const cardWrapper = css`
  display: flex;
  flex-wrap: wrap;
  margin: 40px auto;
  width: 25%;
`;

const card = css`
  background: #f1d74c;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0);
  flex: 1;
  margin: 8px;
  padding: 30px;
  position: relative;
  text-align: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

const iconLink = css`
  font-size: 50px;
  color: black;
  &:hover {
    color: #6491c7;
  }
`;

const h4Style = css`
  font-size: 16px;
  margin-top: 1rem;
  a {
    text-decoration: none;
    color: #6491c7;
  }
`;

const section2Style = css`
  margin: 40px auto;
  width: 38%;

  div {
    height: 300px;
    background: #f1d74c;

    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0);
    flex: 1;
    margin: 8px;
    padding: 30px;
    position: relative;
    text-align: center;
    transition: all 0.5s ease-in-out;
    &:hover {
      -webkit-transform: scale(1.05);
      -moz-transform: scale(1.05);
      transform: scale(1.05);
    }
  }
  li {
    /* list-style: none; */
    font-size: 18px;
    display: inline-block;
  }
  a {
    text-decoration: none;
    color: #6491c7;
  }
`;

const unorderedList = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: auto;
  margin-top: 1rem;
`;

const projectLink = css`
  font-size: 20px;
  a {
    text-decoration: none;
    color: #f1d74c;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Service() {
  return (
    <Layout>
      <title>Service</title>
      <main css={mainStyle}>
        <section css={section1Style}>
          <div css={cardWrapper}>
            <div css={card}>
              <h2>Voice Over Rates</h2>
              <h4 css={h4Style}>For more Information please visit</h4>
              <a css={iconLink} href="https://www.fiverr.com/">
                <i>
                  <SiFiverr />
                </i>
              </a>
            </div>
          </div>
          <br />
          <div css={cardWrapper}>
            <div css={card}>
              <h2>Creative Story Telling</h2>
              <h4 css={h4Style}>
                For more Information please{' '}
                <Link href="/contact" passHref>
                  <a>contact</a>
                </Link>{' '}
                Keith
              </h4>
            </div>
          </div>
          <br />
          <div css={cardWrapper}>
            <div css={card}>
              <h2>Conversation Classes</h2>
              <h4 css={h4Style}>
                Keith also offers Zoom Meetings one-on-one or in a group! For
                more Information please{' '}
                <Link href="/contact" passHref>
                  <a>contact</a>
                </Link>{' '}
                Keith
              </h4>
            </div>
          </div>
        </section>
        <section css={section2Style}>
          <div>
            <h2>Keith provides services for these types of projects:</h2>
            <ul css={unorderedList}>
              <li>Commercials</li>
              <li>Trailers</li>
              <li>Promotions</li>
              <li>Charakters</li>
              <li>Documentary</li>
              <li>eLearning</li>
              <br />
              <br />
              <br />
              <li>Explainer Videos</li>
              <li>Internet Web</li>
              <li>Narration</li>
              <li>Video Games</li>
              <li>Tours</li>
              <li>Announcments</li>
            </ul>
          </div>
        </section>
        <div css={projectLink}>
          <h4>For examples of Keith previous work, please visit the</h4>
          <Link href="/projects">
            <a>Project Section</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
