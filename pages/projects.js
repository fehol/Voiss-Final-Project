import Layout from '../components/Layout';
import { css } from '@emotion/core';

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
`;

const youtube = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  li {
    list-style: none;
    padding: 35px;
    a {
      text-decoration: none;
      color: #f1d74c;
    }
  }
  p {
    display: flex;
    justify-content: space-around;
  }
`;

const headingStyle = css`
  text-align: center;
`;

const playButton = css`
  position: absolute;
  z-index: 3;
  margin: 5px;
  margin-top: 4rem;

  &:hover {
    content: url('/PlayHover.png');
    z-index: 5;
  }
`;

const ytThumbnail = css`
  position: relative;
  z-index: 1;
`;

export default function Youtube({ data }) {
  console.log('data', data);
  return (
    <Layout>
      <title>About</title>
      <main css={mainStyle}>
        <h1 css={headingStyle}>Projects</h1>
        <p>Here you can find my previous projects and projects I work on!</p>

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
                      <img
                        css={playButton}
                        src="/PlayDefault.png"
                        alt="playbutton"
                        height="50px"
                      />
                      <img
                        css={ytThumbnail}
                        width={medium.width}
                        height={medium.height}
                        src={medium.url}
                        alt={medium.title}
                      />
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
