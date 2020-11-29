import Link from 'next/link';
import { css } from '@emotion/core';
import { SiInstagram, SiFiverr, SiYoutube, SiBars } from 'react-icons/si';
import { AiOutlineBars } from 'react-icons/ai';

const mainStyle = css`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    /* ul {
      position: absolute;
      right: 0px;
      height: 92vh;
      width: 100%;
      top: 8vh;
      background-color: #4b6a8f;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.5s ease-in;
      z-index: 9;
    } */
  }
`;

const navStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #4b6a8f;
  width: 100%;
  z-index: 9;
  padding: 0 1rem;
  /* @media (max-width: 1200px) {
    ul {
      width: 100%;
    }
  } */
`;

const logo = css`
  color: black;
  padding: 15px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 20px;
`;

const navLinks = css`
  display: flex;
  width: 50%;
  justify-content: space-around;
  a {
    color: black;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 18px;
    transition: color 0.6s;
    &:hover {
      color: #f2e183;
    }
  }
  li {
    list-style: none;
  }
`;

export const socialMedia = css`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    text-decoration-color: none;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    display: flex;
    transition: background-color 0.9s;
  }
  i {
    margin: auto;
    font-size: 2rem;
    color: #f1d74c;
    transition: color 0.8s;
    &:hover {
      color: black;
    }
  }
`;

const iconLink = css``;

const h4Style = css`
  cursor: pointer;
  &:hover {
    color: #f1d74c;
  }
  /* @media screen and (min-width: 600px) {
    display: none;
  } ; */
`;

export default function Navbar() {
  return (
    <main css={mainStyle}>
      <nav css={navStyle}>
        <div css={logo}>
          <Link href="/about" passHref>
            <h4 css={h4Style}>Keith D. Voss</h4>
          </Link>
        </div>
        <ul css={navLinks}>
          <li>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link activeLink="active" href="/projects" passHref>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/service" passHref>
              <a>Service</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/trilogy" passHref>
              <a>Trilogy-Trio</a>
            </Link>
          </li>
        </ul>
        <div css={socialMedia}>
          <a href="https://www.instagram.com/keithdvoss/" css={iconLink}>
            <i>
              <SiInstagram />
            </i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC3Gr3vqGHZxMKNY26t0QUDg"
            css={iconLink}
          >
            <i>
              <SiYoutube />
            </i>
          </a>
          <a href="https://www.fiverr.com/" css={iconLink}>
            <i>
              <SiFiverr />
            </i>
          </a>
        </div>
      </nav>
    </main>
  );
}
