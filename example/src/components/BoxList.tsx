import { styled } from "styled-components";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  padding-top: 0px;
  gap: 16px;
`;

const Box = styled.div`
  width: 100%;
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
`;
