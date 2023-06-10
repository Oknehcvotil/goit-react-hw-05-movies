import styled from '@emotion/styled';
import { Link as BasicLink } from 'react-router-dom';

export const MovieList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const MovieListItem = styled.li`
  margin-bottom: 5px;
`;

export const Link = styled(BasicLink)`
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease-in-out;

  :hover,
  :focus {
    color: #ff0000;
  }
`;