import styled, { createGlobalStyle } from 'styled-components';
import { minFullHeight } from './styled.utils';

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

export const Screen = styled.div<{ bg: 'light' | 'dark' }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => (p.bg === 'dark' ? '#000' : '#fff')};
  ${minFullHeight}

  & > button {
    margin: 16px 0px;
  }
`;

export const DarkMode = createGlobalStyle`
  body {
    background-color: #000;
    color: #fff;
  }
`;
