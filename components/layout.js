import Header from './Header';
import { css } from '@emotion/core';

const mainStyle = css`
  background: linear-gradient(to bottom, #6491c7 0, #27323f 100%);

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <main css={mainStyle}>{children}</main>
      </div>
    </div>
  );
}
