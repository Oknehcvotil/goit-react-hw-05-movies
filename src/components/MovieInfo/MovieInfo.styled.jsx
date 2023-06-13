import styled from '@emotion/styled';

export const MoviePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 4px;
`;

export const MovieName = styled.h2`
  margin-bottom: 30px;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const MovieTitle = styled.h2``;

export const MovieScore = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const MovieOverviewTitle = styled.h3`
  margin-bottom: 10px;
`;

export const MovieOverviewContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

export const MovieGenresTitle = styled.h4`
  margin-bottom: 10px;
`;
