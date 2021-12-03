import styled, { css } from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
  width: 100%;
  min-height: fit-content;
  padding: 1rem;
  justify-content: space-between;
  background-color:  #2d2d2c;
  color: #f2f2f2;
  display: inline-flex;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  text-decoration: none !important;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    color: white;
  }
`;

export const NavMenu = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  list-style: none;
  display: inline-flex;
`;

export const Button = styled.button`
    padding-left: 0;
    align-items: left;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;