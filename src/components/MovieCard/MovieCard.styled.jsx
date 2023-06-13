import styled from '@emotion/styled';
import { Link as BasicLink } from 'react-router-dom';

export const MovieListItem = styled.li`
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(255, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Link = styled(BasicLink)`
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease-in-out;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const MovieName = styled.p`
  height: 36px;
  font-weight: 500;
  font-size: 14px;
  padding: 12px;
  text-transform: uppercase;
  line-height: 1.16;
`;
