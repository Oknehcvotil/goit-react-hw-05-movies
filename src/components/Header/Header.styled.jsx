import styled from '@emotion/styled';
import { NavLink as BasicNavLink } from 'react-router-dom';

export const HeaderCont = styled.header`
  background: linear-gradient(to bottom, #000000, #aa0000);
  padding: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export const NavLink = styled(BasicNavLink)`
  text-decoration: none;
  color: #fff;
  padding: 5px 10px;
  transition: color 0.3s ease-in-out;
  font-weight: bold;

  :hover,
  :focus,
  &.active {
    color: #ff0000;
  }

  :focus {
    outline: none;
  }
`;
