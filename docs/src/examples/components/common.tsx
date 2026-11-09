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
    padding: '{spacing.$3} {spacing.$4}',
    backgroundColor: '$accent.text',
    color: '$bg.canvas',
    border: 'none',
    textStyle: '$example.control',
    borderRadius: '$full',
    textAlign: 'center',
    transition: 'opacity 0.1s ease-out',
    '&:active': {
      opacity: '0.8',
    },
  },
  variants: {
    variant: {
      default: {},
      launch: {
        padding: '{spacing.$3} {spacing.$5}',
        backgroundColor: '$accent.text',
        borderRadius: '$md',
        textStyle: '$example.launch',
        '&:hover': {
          opacity: '0.9',
        },
        '&:focus-visible': {
          outline: '$focus',
          outlineOffset: '3px',
        },
      },
      secondary: {
        backgroundColor: '$surface.card',
        color: '$surface.text',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const Screen = styled('div', {
  base: {
    backgroundColor: '$bg.canvas',
    width: '100%',
    minHeight: '100%',
    paddingTop: 'env(safe-area-inset-top)',
    'html[data-example-layout="custom"] &': {
      backgroundColor: '$surface.app',
      color: '$surface.text',
    },
  },
});

export const ScrollView = styled('div', {
  base: {
    overflowY: 'auto',
    height: '100dvh',
    overscrollBehaviorY: 'none',
  },
});
