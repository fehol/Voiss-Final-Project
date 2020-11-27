import Layout from '../components/Layout';
import { css } from '@emotion/core';
import Newsletter from '../components/Newsletter';
import Link from 'next/link';

const mainStyle = css`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const container = css`
  margin-top: 2rem;
  width: 650px;
  height: 100vh;
  a {
    text-decoration: none;
    color: #f1d74c;
    &:hover {
      text-decoration: underline;
    }
    i {
      font-size: 36px;
    }
  }
`;

const listStyle = css`
  font-size: 20px;
  text-align: justify;
  li {
    list-style: none;
  }
`;

export default function Contact() {
  return (
    <Layout>
      <title>Contact</title>
      <main css={mainStyle}>
        <div css={container}>
          <h1> Contact Information</h1>
          <ul css={listStyle}>
            <li>
              <br />
              You can contact me via Email <br />
              <br />
              <a href="mailto:keithdvoss@gmail.com">keithdvoss@gmail.com</a>
            </li>
            <br />
            <li>
              For more Informations about my Voice Over rates visit{' '}
              <Link href="/service">Service</Link> or check out my
              <a href="https://www.fiverr.com/">
                <a> Fiverr Profile</a>.
              </a>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
