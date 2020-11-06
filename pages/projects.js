import Layout from '../components/Layout';
import { css } from '@emotion/core';

const videoBox = css`
  display: flex;
  justify-content: space-around;
  margin: 5rem;
`;

const videoBox1 = css`
  margin: 5rem;
`;
const videoBox2 = css`
  margin: 5rem;
`;

export default function projects() {
  return (
    <Layout>
      <div css={videoBox}>
        <div css={videoBox1}>
          <h3>Demo for a tech company (in draft) </h3>
          <video width="640" height="480" controls>
            <source src="/projects/wieNeu.mp4" type="video/mp4" />
            <track
              src="/projects/wieNeu.mp4"
              kind="captions"
              srclang="en"
              label="english_captions"
            />
            Video Format not supported
          </video>
        </div>
        <div css={videoBox2}>
          <video width="640" height="480" controls>
            <source src="/projects/wieNeu.mp4" type="video/mp4" />
            <track
              src="/projects/wieNeu.mp4"
              kind="captions"
              srclang="en"
              label="english_captions"
            />
            Video Format not supported
          </video>
        </div>
      </div>
    </Layout>
  );
}
