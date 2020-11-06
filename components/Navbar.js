import Link from 'next/link';
import { css } from '@emotion/core';
// import { Fragment } from 'react';
// import { FaHome, FaAddressCard, FaSoundcloud } from 'react-icons/fa';
// import { RiServiceFill } from 'react-icons/ri';
// import { MdContactPhone, MdPeople } from 'react-icons/md';
import { SiInstagram, SiFiverr, SiYoutube, SiTwitter } from 'react-icons/si';

const navStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: #4b6a8f;
`;

const logo = css`
  color: black;
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
      color: rgba(255, 255, 255, 0.8);
    }
  }
  li {
    list-style: none;
  }
`;

const socialMedia = css`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    text-decoration-color: none;
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    display: flex;
    transition: background-color 0.6s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.6);
      & :active {
        background: #f1d74c;
        color: #ffffff;
      }
    }
  }
  i {
    margin: auto;
    font-size: 2rem;
    color: black;
    transition: color 0.8s;
    &:hover {
      color: rgb(255, 255, 255, 0.8);
    }
  }
`;

const iconLink = css``;

export default function Navbar() {
  return (
    <nav css={navStyle}>
      <div css={logo}>
        <Link href="/about" passHref>
          <h4>Keith D. Voss</h4>
        </Link>
      </div>
      <ul css={navLinks}>
        <li>
          {' '}
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
          <Link href="/projects" passHref>
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
          <Link href="/clients" passHref>
            <a>Clients</a>
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
        <a href="https://www.fiverr.com/" css={iconLink}>
          <i>
            <SiTwitter />
          </i>
        </a>
      </div>
    </nav>
  );
}
