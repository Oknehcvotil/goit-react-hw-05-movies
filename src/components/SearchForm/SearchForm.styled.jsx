import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  :focus {
    outline: none;
    border-color: #ff0000;
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
  }
`;

export const FormBtn = styled.button`
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  :hover {
    background-color: #990000;
  }
`;
