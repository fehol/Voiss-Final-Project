import { css } from '@emotion/core';
import Footer from './Footer';
import Header from './Header';

const mainStyle = css`
  background: linear-gradient(to bottom, #6491c7 0, #27323f 100%);
`;

export default function Layout({ children }) {
  return (
    <main>
      <div>
        <Header />
        <div>
          <main css={mainStyle}>{children}</main>
        </div>
      </div>

      <Footer />
    </main>
  );
}
