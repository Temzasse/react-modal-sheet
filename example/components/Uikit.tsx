import styled, { createGlobalStyle } from 'styled-components';

export const Button = styled.button`
  padding: 6px 16px;
  background-color: aliceblue;
  color: mediumslateblue;
  border: none;
  font-weight: 500;
  border-radius: 999px;
  text-align: center;
  margin: 8px 0px;
`;

export const DarkMode = createGlobalStyle`
  body {
    background-color: #000;
    color: #fff;
  }
`;
