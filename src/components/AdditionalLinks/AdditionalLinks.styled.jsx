import { NavLink as BasedNavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinksCont = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

export const LinksTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const NavLink = styled(BasedNavLink)`
  display: inline-block;
  padding: 3px 10px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  border: 1px solid #ff0000;
  border-radius: 4px;

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover,
  :focus {
    background-color: #ff0000;
    color: #fff;
  }
`;
