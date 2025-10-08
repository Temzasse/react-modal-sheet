import {
	AiOutlineColumnHeight as HeightIcon,
	AiOutlineSlack as SlackIcon,
	AiOutlineControl as SnapIcon,
} from "react-icons/ai";
import {
	FaMap as AppleMapIcon,
	FaMusic as AppleMusicIcon,
	FaMobile,
	FaWalking,
	FaKeyboard as KeyboardIcon,
	FaLock as LockIcon,
	FaMoon as MoonIcon,
	FaPaintBrush as PaintIcon,
	FaScroll as ScrollIcon,
} from "react-icons/fa";
import { LuScrollText, LuWaypoints } from "react-icons/lu";
import { MdAccessibility as A11yIcon } from "react-icons/md";
import { Link, Route, Routes } from "react-router";
import { styled } from "styled-components";

import { AvoidKeyboard } from "./AvoidKeyboard";
import { A11y } from "./a11y";
import { AppleMaps } from "./apple-maps";
import { AppleMusic } from "./apple-music";
import { ContentHeight } from "./ContentHeight";
import { CustomScroller } from "./CustomScroller";
import { CustomStyles } from "./CustomStyles";
import { DarkMode, Screen, ScrollView } from "./common";
import { DisableDrag } from "./DisableDrag";
import { FullScreen } from "./FullScreen";
import { ReducedMotion } from "./ReducedMotion";
import { Scrollable } from "./Scrollable";
import { ScrollableSnapPoints } from "./ScrollableSnapPoints";
import { ShadowDOM } from "./ShadowDOM";
import { SnapPoints } from "./SnapPoints";
import { SlackMessage } from "./slack-message";

export function App() {
	return (
		<ScrollView>
			<Routes>
				<Route
					path="/"
					element={
						<Screen>
							<ExampleSelector />
						</Screen>
					}
				/>
				<Route
					path="snap-points/*"
					element={
						<Screen>
							<SnapPoints />
						</Screen>
					}
				/>
				<Route
					path="scrollable-snap-points/*"
					element={
						<Screen>
							<ScrollableSnapPoints />
						</Screen>
					}
				/>
				<Route
					path="scrollable/*"
					element={
						<Screen>
							<Scrollable />
						</Screen>
					}
				/>
				<Route
					path="avoid-keyboard/*"
					element={
						<Screen>
							<AvoidKeyboard />
						</Screen>
					}
				/>
				<Route
					path="content-height/*"
					element={
						<Screen>
							<ContentHeight />
						</Screen>
					}
				/>
				<Route
					path="custom-styles/*"
					element={
						<Screen>
							<CustomStyles />
						</Screen>
					}
				/>
				<Route
					path="custom-scroller/*"
					element={
						<Screen>
							<CustomScroller />
						</Screen>
					}
				/>
				<Route
					path="apple-music/*"
					element={
						<Screen>
							<AppleMusic />
							<DarkMode />
						</Screen>
					}
				/>
				<Route
					path="apple-maps/*"
					element={
						<Screen>
							<AppleMaps />
							<DarkMode />
						</Screen>
					}
				/>
				<Route
					path="slack-message/*"
					element={
						<Screen>
							<SlackMessage />
							<DarkMode />
						</Screen>
					}
				/>
				<Route
					path="a11y/*"
					element={
						<Screen>
							<A11y />
						</Screen>
					}
				/>
				<Route
					path="disable-drag/*"
					element={
						<Screen>
							<DisableDrag />
						</Screen>
					}
				/>
				<Route
					path="reduced-motion/*"
					element={
						<Screen>
							<ReducedMotion />
						</Screen>
					}
				/>
				<Route
					path="full-screen/*"
					element={
						<Screen>
							<FullScreen />
						</Screen>
					}
				/>
				<Route
					path="shadow-dom/*"
					element={
						<Screen>
							<ShadowDOM />
						</Screen>
					}
				/>
			</Routes>
		</ScrollView>
	);
}

const ExampleSelector = () => {
	return (
		<ExampleLinks>
			<li>
				<ExampleLink to="snap-points">
					<SnapIcon size={48} />
					<span>Snap points</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="content-height">
					<HeightIcon size={48} />
					<span>Use Content Height</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="custom-styles">
					<PaintIcon size={32} />
					<span>Custom Styles</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="scrollable">
					<ScrollIcon size={48} />
					<span>Scrollable</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="custom-scroller">
					<LuScrollText size={48} />
					<span>Custom Scroller</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="avoid-keyboard">
					<KeyboardIcon size={48} />
					<span>Avoid keyboard</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="scrollable-snap-points">
					<LuWaypoints size={48} />
					<span>Scrollable (with snap points)</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="disable-drag">
					<LockIcon size={48} />
					<span>Disable drag</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="apple-music">
					<AppleMusicIcon size={48} />
					<span>Apple Music</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="apple-maps">
					<AppleMapIcon size={48} />
					<span>Apple Maps</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="slack-message">
					<SlackIcon size={48} />
					<span>Slack Message</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="a11y">
					<A11yIcon size={48} />
					<span>Accessible Sheet</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="reduced-motion">
					<FaWalking size={48} />
					<span>Reduced Motion</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="full-screen">
					<FaMobile size={48} />
					<span>Full screen</span>
				</ExampleLink>
			</li>

			<li>
				<ExampleLink to="shadow-dom">
					<MoonIcon size={48} />
					<span>Shadow DOM</span>
				</ExampleLink>
			</li>
		</ExampleLinks>
	);
};

const ExampleLinks = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

const ExampleLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 32px 48px;
  text-align: center;
  background-color: #f5f5f5;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #eee;
  }

  span {
    font-weight: 500;
    font-size: 18px;
  }
`;
