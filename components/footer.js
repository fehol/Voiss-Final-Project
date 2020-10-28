/** @jsx jsx */
/** @jsxRuntime classic */

import { jsx, css } from '@emotion/core';
import { CgFacebook } from 'react-icons/cg';
import { CgInstagram } from 'react-icons/cg';



const footerStyle = css`
  background: black;
  margin: 0;
  padding: 10px;
  color: #ff0ae6;
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  padding: 10px;
  background: #6491C7;
`;

const iconStyle = css `
display: flex;
justify-content: space-between;
`




export default function Footer() {
  return (
    <footer css={footerStyle}>
      <div css={iconStyle}>
        <CgFacebook />
      <CgInstagram />
      </div>

    </footer>
  );
}
