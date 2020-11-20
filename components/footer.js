import { css } from '@emotion/core';
import Link from 'next/link';

const footerStyle = css`
  display: flex;
  justify-content: space-between;
  background-color: #232e41;
  font-size: 1.5rem;
  a {
    text-decoration: none;
    color: black;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <div>
        <Link href="/impressum">
          <a>Impressum</a>
        </Link>
      </div>
    </footer>
  );
}
