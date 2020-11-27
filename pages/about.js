import Layout from '../components/Layout';
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const aboutStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
`;
const containerStyle = css`
  margin-top: 2rem;
  width: 650px;
  height: 100vh;
  h1 {
  }
  a {
    color: #64ffda;
    text-decoration: none;
    &:before {
      text-decoration: underline;
    }
  }
`;

const image = css``;

export default function About() {
  return (
    <Layout>
      <div css={aboutStyle}>
        <div css={containerStyle}>
          <h1>About me</h1>
          <br />
          <h3>
            Hi! Im Keith Voss, Teacher, Story Teller and Voice Actor from Graz
          </h3>
          <br />

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            amet, voluptas voluptatum facere ullam iusto sunt quidem at, ipsum
            quis, pariatur illum. Optio molestiae provident veniam quas non
            commodi sint. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            voluptatum voluptas explicabo, a rem praesentium consequuntur
            maxime, provident repellendus exercitationem eligendi quis ut dolor
            magni quae. Odio commodi quisquam pariatur?
            <br />
          </p>

          <img
            css={image}
            src="/photos/keith.jpg"
            height="300px"
            width="500px"
            alt="PhotoFelix"
          />
        </div>
      </div>
    </Layout>
  );
}
