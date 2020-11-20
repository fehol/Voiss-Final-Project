import Layout from '../components/Layout';
import { css } from '@emotion/core';
import Newsletter from '../components/Newsletter';
import Link from 'next/link';
import { SiFiverr } from 'react-icons/si';

const container = css`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
  align-content: center;
`;

const listStyle = css`
  padding: 2rem;
  font-size: 20px;
  li {
    list-style: none;
  }
`;

export default function Contact() {
  return (
    <Layout>
      <title>Contact</title>
      <div css={container}>
        <h1> Contact Information</h1>
        <ul css={listStyle}>
          <li>
            {' '}
            You can contact me via Email{' '}
            <a href="mailto:felix.hollmann@gmx.net">keith@voss.com</a>
          </li>
          <br />
          <li>
            For more Informations about my Voice Over rates visit{' '}
            <Link href="/service">Service</Link> or check out my
            <a href="https://www.fiverr.com/">
              <i>
                <SiFiverr />
              </i>
            </a>
          </li>
        </ul>
      </div>
      <Newsletter />
    </Layout>
  );
}
