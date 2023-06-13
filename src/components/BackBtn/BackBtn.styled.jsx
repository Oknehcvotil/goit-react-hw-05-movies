import { Link as BaseLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(BaseLink)`
  display: inline-block;
  padding: 5px 10px;
  background-color: #6d6565;
  color: #f5f1f1;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: 20px;

  :hover,
  :focus {
    background-color: #ddd;
    color: #222;
  }
`;
