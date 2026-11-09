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
    padding: '$4',
    paddingTop: '0px',
    gap: '$4',
  },
});

const Box = styled('div', {
  base: {
    width: '100%',
    backgroundColor: '$surface.card',
    borderRadius: '$lg',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textStyle: '$example.strong',
    userSelect: 'none',
  },
});
