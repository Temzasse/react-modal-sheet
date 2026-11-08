import { useRef } from 'react';
import { type AriaButtonProps, useButton } from 'react-aria';

import { styled } from '../../../styled-system/jsx';

export function Button({
  children,
  className,
  variant,
  ...rest
}: AriaButtonProps & {
  className?: string;
  variant?: 'default' | 'launch' | 'secondary';
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(rest, buttonRef);

  return (
    <ButtonBase
      variant={variant}
      {...buttonProps}
      ref={buttonRef}
      className={className}
    >
      {children}
    </ButtonBase>
  );
}

const ButtonBase = styled('button', {
  base: {
    cursor: 'pointer',
    padding: '12px 16px',
    backgroundColor: 'var(--sl-color-text-accent)',
    color: 'var(--sl-color-bg)',
    border: 'none',
    fontWeight: '500',
    borderRadius: '999px',
    textAlign: 'center',
    lineHeight: '1',
    transition: 'opacity 0.1s ease-out',
    '&:active': { opacity: '0.8' },
  },
  variants: {
    variant: {
      default: {},
      launch: {
        padding: '13px 20px',
        backgroundColor: 'var(--sl-color-text-accent)',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '1.25',
        '&:hover': { opacity: '0.9' },
        '&:focus-visible': {
          outline: '3px solid var(--sl-color-accent)',
          outlineOffset: '3px',
        },
      },
      secondary: {
        backgroundColor: 'var(--example-card-bg)',
        color: 'var(--example-text)',
      },
    },
  },
  defaultVariants: { variant: 'default' },
});

export const Screen = styled('div', {
  base: {
    backgroundColor: 'var(--sl-color-bg)',
    width: '100%',
    minHeight: '100%',
    paddingTop: 'env(safe-area-inset-top)',
    'html[data-example-layout="custom"] &': {
      backgroundColor: 'var(--example-app-bg)',
      color: 'var(--example-text)',
    },
  },
});

export const ScrollView = styled('div', {
  base: { overflowY: 'auto', height: '100dvh' },
});
