import Layout from '../components/Layout';
import { css } from '@emotion/core';
import Newsletter from '../components/Newsletter';

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLLIMMD_4NEu-Qwp3r9z2x0Gt20VkNUSlv&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`,
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const mainStyle = css`
  display: flex;
  height: 100vh;
  flex-direction: column;
  text-align: center;
  h1 {
    margin-top: 2rem;
  }
  p {
    font-size: 22px;
  }
`;

const youtube = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  li {
    list-style: none;
    padding: 25px;
    a {
      text-decoration: none;
      color: #f1d74c;
    }
  }
`;

const headingStyle = css`
  text-align: center;
  p {
    font-size: 24px;
  }
`;

export default function Youtube({ data }) {
  console.log('data', data);
  return (
    <Layout>
      <title>Trilogy Trio</title>
      <main css={mainStyle}>
        <h1 css={headingStyle}>Trilogy</h1>

        <p>
          Join brothers Keith and Ryan Voss (along with a special guest) as they
          discuss some of the most famous (and infamous) film trilogies!
        </p>
        <div css={youtube}>
          <ul>
            {data.items.map((item) => {
              console.log('item');
              const { id, snippet = {} } = item;
              const { title, thumbnails = {}, resourceId } = snippet;
              const { medium = {} } = thumbnails;
              return (
                <li key={id}>
                  <a
                    href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                  >
                    <h3>{title}</h3>
                    <p>
                      {' '}
                      <img
                        width={medium.width}
                        height={medium.height}
                        src={medium.url}
                        alt=""
                      />
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
          <Newsletter />
        </div>
      </main>
    </Layout>
  );
}
