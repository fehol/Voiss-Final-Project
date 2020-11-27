import { css } from '@emotion/core';
import Link from 'next/link';

const footerStyle = css`
  background-color: #232e41;
  font-size: 1.5rem;
  text-align: center;
  a {
    text-decoration: none;
    color: #f1d74c;
    &:hover {
      text-decoration: underline;
    }
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
