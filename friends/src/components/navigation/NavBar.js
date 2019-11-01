import React from 'react';
import { NavLink } from 'react-router-dom';
import { getToken } from '../../utils/axiosutils';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2%;
  background: black;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
`

const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  width: 100%;
`;

function NavBar(props) {
  const signedIn = getToken()

  return (
    <Nav className='navContainer'>
      <Logo>Friendz-Own</Logo>
      <NavLinks className='navLinks'>
        <NavLink to='/'>
          Home
        </NavLink>
        {!signedIn && <NavLink to='/login'>
          Login
        </NavLink>}
        {signedIn && <NavLink to='/friends'>
          Friends
        </NavLink>}
        {signedIn && <NavLink to='/login' onClick={() => {localStorage.removeItem('token')}}>
          Logout
        </NavLink>}
      </NavLinks>
    </Nav>
  )
}

export default NavBar;