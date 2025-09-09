import { useEffect, useState } from "react";
import { Sheet } from "react-modal-sheet";

import { ExampleLayout } from "./ExampleLayout";

export function ShadowDOM() {
	const shadowRoot = useShadowRoot();

	return (
		<ExampleLayout
			title="Shadow DOM"
			description="Sheet that is rendered inside Shadow DOM."
		>
			{({ isOpen, close }) => (
				<>
					{/* Render the Sheet only when the shadowRoot is ready */}
					{shadowRoot && (
						<Sheet isOpen={isOpen} onClose={close} mountPoint={shadowRoot}>
							<Sheet.Container>
								<Sheet.Header />
								<Sheet.Content>
									{/* We used inline styles because the CSS in document.head is outside the shadow DOM */}
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											padding: "16px",
											paddingTop: "0px",
										}}
									>
										{Array.from({ length: 50 }).map((_, i) => (
											<div
												key={i}
												style={{
													backgroundColor: "#eee",
													borderRadius: "12px",
													minHeight: "200px",
													marginBottom: "16px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													fontWeight: "700",
													fontSize: "24px",
												}}
											>
												{i}
											</div>
										))}
									</div>
								</Sheet.Content>
							</Sheet.Container>
							<Sheet.Backdrop />
						</Sheet>
					)}
				</>
			)}
		</ExampleLayout>
	);
}

const SHADOW_ROOT_ID = "react-modal-sheet-shadow-root";

function useShadowRoot() {
	const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

	useEffect(() => {
		// Create a shadow DOM root dynamically if it doesn't already exist
		let shadowRootContainer = document.getElementById(SHADOW_ROOT_ID);

		if (!shadowRootContainer) {
			shadowRootContainer = document.createElement("div");
			shadowRootContainer.id = SHADOW_ROOT_ID;
			document.body.appendChild(shadowRootContainer);
		}

		// Attach shadow root and update state
		if (!shadowRoot) {
			const root = shadowRootContainer.attachShadow({ mode: "open" });
			setShadowRoot(root);
		}

		return () => {
			// Clean up the shadow root when the component is unmounted
			if (shadowRoot) {
				shadowRoot.host.remove();
				setShadowRoot(null);
			}
		};
	}, [shadowRoot]);

	return shadowRoot as HTMLElement | null;
}
