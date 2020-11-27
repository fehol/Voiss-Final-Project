import styled from 'styled-components';
import Menu from './Menu';

const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  /* position: fixed; */
  z-index: 9;
  padding: 0 1rem;
  display: flex;
  color: black;
  background: #4b6a8f;
  justify-content: space-between;
  h1 {
    padding: 15px;
    text-transform: uppercase;
  }
`;

export default function NavbarResp() {
  return (
    <Nav>
      <h1>Keith D. Voss</h1>

      <Menu />
    </Nav>
  );
}
