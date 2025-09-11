import { styled } from "styled-components";

import { A11ySheet } from "./A11ySheet";
import { ExampleLayout } from "../ExampleLayout";

export function A11y() {
	return (
		<ExampleLayout
			title="Accessibility"
			description="An accessible sheet with the help of React Aria."
		>
			{(state) => (
				<A11ySheet state={state} label="Accessible bottom sheet">
					<SheetContent>
						<strong>This is a simple a11y sheet 🦾</strong>
						<p>Your content goes here...</p>
					</SheetContent>
				</A11ySheet>
			)}
		</ExampleLayout>
	);
}

const SheetContent = styled.div`
  text-align: center;
  padding-top: 24px;
`;
