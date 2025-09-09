import { useRef, useState } from "react";
import { styled } from "styled-components";
import { Sheet } from "react-modal-sheet";

import { ExampleLayout } from "./ExampleLayout";

export function DisableDrag() {
	const { isScrolling, onScroll } = useScrolling();

	return (
		<ExampleLayout
			title="Disable drag"
			description="Disable drag for horizontal scrolling inside the sheet."
		>
			{({ isOpen, close }) => (
				<Sheet isOpen={isOpen} onClose={close}>
					<Sheet.Container>
						<Sheet.Header />
						<Sheet.Content disableDrag={isScrolling}>
							<Content>
								<div>
									{isScrolling
										? "Scrolling (drag disabled)"
										: "Not scrolling (drag enabled)"}
								</div>

								<BoxList onScroll={onScroll}>
									{Array.from({ length: 20 })
										.fill(1)
										.map((_, i) => (
											<Box
												key={
													// biome-ignore lint/suspicious/noArrayIndexKey: It was here before Biome 2
													i
												}
											>
												{i}
											</Box>
										))}
								</BoxList>
							</Content>
						</Sheet.Content>
					</Sheet.Container>
					<Sheet.Backdrop />
				</Sheet>
			)}
		</ExampleLayout>
	);
}

function useScrolling() {
	const [isScrolling, setScrolling] = useState<boolean>(false);
	const timeout = useRef<any>(undefined);

	const onScroll = () => {
		setScrolling(true);
		clearTimeout(timeout.current);
		timeout.current = setTimeout(() => setScrolling(false), 150);
	};

	return { onScroll, isScrolling };
}

const Content = styled.div`
  padding: 16px;
`;

const BoxList = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 0px;
  overflow-x: auto;
`;

const Box = styled.div`
  flex-shrink: 0;
  background-color: #eee;
  border-radius: 12px;
  width: 200px;
  height: 200px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;
