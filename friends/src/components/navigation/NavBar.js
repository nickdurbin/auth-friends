import React from 'react';
import { NavLink } from 'react-router-dom';
import HomePage from '../home/HomePage';
import LoginForm from '../login/LoginForm';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: white;
`;

function NavBar() {
  return (
    <Nav className='navContainer'>
      <Logo>Friendz-Own</Logo>
      <div className='navLinks'>
        <NavLink exact path='/' component={HomePage} />
        <NavLink path='/login' component={LoginForm} />
      </div>
    </Nav>
  )
}

export default NavBar;