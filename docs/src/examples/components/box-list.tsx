import { styled } from '../../../styled-system/jsx';

export function BoxList({ count = 50 }: { count?: number }) {
  return (
    <Wrapper>
      {Array.from({ length: count })
        .fill(1)
        .map((_, i) => (
          <Box key={i}>{i + 1}</Box>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    paddingTop: '0px',
    gap: '16px',
  },
});

const Box = styled('div', {
  base: {
    width: '100%',
    backgroundColor: 'var(--example-card-bg)',
    borderRadius: '12px',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '16px',
    userSelect: 'none',
  },
});
