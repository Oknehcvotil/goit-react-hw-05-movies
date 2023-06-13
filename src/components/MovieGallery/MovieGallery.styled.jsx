import styled from '@emotion/styled';

export const HomeTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
`;

export const MovieList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

