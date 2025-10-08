import {
	Sheet,
	useScrollPosition,
	useVirtualKeyboard,
} from "react-modal-sheet";
import styled from "styled-components";
import { BoxList } from "./BoxList";
import { ExampleLayout } from "./ExampleLayout";

export function CustomScroller() {
	const { scrollRef, scrollPosition } = useScrollPosition();

	// This assigns the `--keyboard-inset-height` CSS variable to the `:root` element
	useVirtualKeyboard();

	return (
		<ExampleLayout
			title="Custom Scroller"
			description="Sheet that has a custom scroller."
		>
			{({ isOpen, close }) => (
				/* Disable default keyboard avoidance */
				<Sheet isOpen={isOpen} onClose={close} avoidKeyboard={false}>
					<Sheet.Container>
						<Sheet.Header />

						{/* Disable default content scrolling */}
						<Sheet.Content disableScroll disableDrag={scrollPosition !== "top"}>
							<Content>
								<ContentHeader>
									<Input type="text" placeholder="Focus me" />
								</ContentHeader>

								<Scroller ref={scrollRef}>
									<ScrollPosition>
										Scroll position: {scrollPosition}
									</ScrollPosition>
									<BoxList count={10} />
								</Scroller>

								<ContentFooter onClick={close}>Close</ContentFooter>
							</Content>
						</Sheet.Content>
					</Sheet.Container>

					<Sheet.Backdrop />
				</Sheet>
			)}
		</ExampleLayout>
	);
}

const Content = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  transition: padding-bottom 100ms;
  padding-bottom: var(--keyboard-inset-height);
`;

const Scroller = styled.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: none;
`;

const ScrollPosition = styled.div`
  padding: 8px;
  font-size: 14px;
  color: #666;
  text-align: center;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
`;

const ContentHeader = styled.div`
  padding: 16px;
  background: #ccc;
  text-align: center;
  font-weight: bold;
`;

const ContentFooter = styled.button`
  padding: 16px;
  background: #1255a7;
  color: white;
  text-align: center;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: white;

  &:focus {
    outline: none;
    border-color: #1255a7;
  }
`;
