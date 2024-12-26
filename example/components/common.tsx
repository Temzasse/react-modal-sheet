import { useRef } from 'react';
import { useButton, type AriaButtonProps } from 'react-aria';
import styled, { createGlobalStyle } from 'styled-components';

export function Button({ children, ...rest }: AriaButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(rest, buttonRef);

  return (
    <ButtonBase {...buttonProps} ref={buttonRef}>
      {children}
    </ButtonBase>
  );
}

const ButtonBase = styled.button`
  cursor: pointer;
  padding: 12px 16px;
  background-color: #000;
  color: #fff;
  border: none;
  font-weight: 500;
  border-radius: 999px;
  text-align: center;
  line-height: 1;
  transition: opacity 0.1s ease-out;

  &:active {
    opacity: 0.8;
  }
`;

export const Screen = styled.div<{ bg: 'light' | 'dark' }>`
  background-color: ${(p) => (p.bg === 'dark' ? '#000' : '#fff')};
  width: 100%;
  min-height: 100%;
`;

export const ScrollView = styled.div`
  overflow-y: auto;
  height: 100vh;
  height: 100dvh;
`;

export const DarkMode = createGlobalStyle`
  body {
    background-color: #000;
    color: #fff;
  }
`;
