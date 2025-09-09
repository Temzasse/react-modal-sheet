import { Sheet } from "react-modal-sheet";
import { styled } from "styled-components";

import { BoxList } from "./BoxList";
import { ExampleLayout } from "./ExampleLayout";

export function FullScreen() {
	return (
		<ExampleLayout
			title="FullScreen"
			description="Sheet that fills the entire screen."
		>
			{({ isOpen, close }) => (
				<Sheet detent="full" isOpen={isOpen} onClose={close}>
					<SheetContainer>
						<Sheet.Header />
						<Sheet.Content>
							<BoxList count={50} />
						</Sheet.Content>
					</SheetContainer>
				</Sheet>
			)}
		</ExampleLayout>
	);
}

const SheetContainer = styled(Sheet.Container)`
  border-radius: 0 !important;
`;
