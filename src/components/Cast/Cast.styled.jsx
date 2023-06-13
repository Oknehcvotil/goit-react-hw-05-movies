import styled from '@emotion/styled';

export const CastContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const CastCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 4px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const CastImage = styled.img`
  display: block;
  margin-bottom: 10px;
`;

export const CastName = styled.h3`
  margin-bottom: 5px;
`;
