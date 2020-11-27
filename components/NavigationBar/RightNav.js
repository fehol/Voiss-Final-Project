import styled from 'styled-components';
import Link from 'next/link';
import { socialMedia } from '../Navigation/Navbar';
import { SiInstagram, SiFiverr, SiYoutube, SiBars } from 'react-icons/si';

const BlankLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  align-items: center;
  text-transform: uppercase;
  li {
    padding: 0.5rem 0.5rem;
    margin-right: 3rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #4b6a8f;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: -2rem;
    right: 0;
    height: 40vh;
    width: 15rem;
    padding-top: 3.5rem;
    border-radius: 0.5rem 0.5rem;
    opacity: 97%;
    transition: transform 0.3s ease-in-out;
    li {
      color: ghostwhite;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="/">
          <BlankLink>HOME</BlankLink>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <BlankLink>About</BlankLink>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <BlankLink>Projects</BlankLink>
        </Link>
      </li>
      <li>
        <Link href="/service">
          <BlankLink>Service</BlankLink>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <BlankLink>Contact</BlankLink>
        </Link>
      </li>
      <div css={socialMedia}>
        <a href="https://www.instagram.com/keithdvoss/">
          <i>
            <SiInstagram />
          </i>
        </a>
        <a href="https://www.youtube.com/channel/UC3Gr3vqGHZxMKNY26t0QUDg">
          <i>
            <SiYoutube />
          </i>
        </a>
        <a href="https://www.fiverr.com/">
          <i>
            <SiFiverr />
          </i>
        </a>
      </div>
    </Ul>
  );
};

export default RightNav;
