import Layout from '../components/Layout';
import { css } from '@emotion/core';

const textStyles = css`
  font-size: 24px;
`;

export default function Trilogy() {
  return (
    <Layout>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1>Trilogy</h1>
        <p css={textStyles}>
          Join brothers Keith and Ryan Voss (along with a special guest) as they
          discuss some of the most famous (and infamous) film trilogies!
        </p>
      </div>
    </Layout>
  );
}
