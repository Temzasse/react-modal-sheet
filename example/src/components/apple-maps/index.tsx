import {
  interpolate,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';
import { type ComponentProps, useRef, useState } from 'react';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import { Sheet } from 'react-modal-sheet';
import { Link } from 'react-router';
import styled from 'styled-components';

import { useSafeAreaInsets } from '../../hooks/use-safe-area-insets';
import { useSheetRef } from '../../hooks/use-sheet-ref';
import { useSnapPointTransform } from '../../hooks/use-sheet-snap-transform';
import bgImg from './map-bg.jpeg';

const padding = 8;
const borderRadius = 30;
const headerHeight = 67;

export function AppleMaps() {
  const [isOpen, setOpen] = useState(true);
  const [sheetRef, setSheetRef] = useSheetRef();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: scrollRef });
  const insets = useSafeAreaInsets();
  const bottomInset = insets.bottom;

  const snapPoints = [0, headerHeight + padding + bottomInset, 0.5, 1];
  const initialSnap = 1;
  const lastSnap = snapPoints.length - 1;

  const contentBorderColor = useMotionTemplate`
    rgba(150, 150, 150, ${useTransform(scrollY, [0, 40], [0, 0.1])})
  `;

  /**
   * NOTE: we need to use the sheet ref to animate elements outside the sheet
   * because we don't have access to the sheet's context value.
   *
   * It's important to note that for animating elements inside the sheet,
   * it's better to use the `useSheetContext` hook to access various motion values.
   */
  const backlinkOpacity = useTransform(() => {
    const progress = sheetRef?.yProgress.get() ?? 0;
    const mix = interpolate([0, 0.5, 0.6], [1, 1, 0]);
    return mix(progress);
  });

  const backlinkDisplay = useTransform(() => {
    const progress = sheetRef?.yProgress.get() ?? 0;
    if (progress > 0.6) return 'none';
    return 'block';
  });

  function handleSnapChange(snap: number) {
    const scroller = scrollRef.current;
    if (!scroller) return;

    /**
     * If we have scrolled the content and we are not at the upmost snap point,
     * scroll back to top
     */
    if (scroller.scrollHeight > scroller.clientHeight && snap !== lastSnap) {
      scroller.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  return (
    <Container>
      <FakeMap />

      <BackLinkContainer
        style={{ opacity: backlinkOpacity, display: backlinkDisplay }}
      >
        <BackLink to="..">
          <FiChevronLeft size={16} />
          <span>Back</span>
        </BackLink>
      </BackLinkContainer>

      <Sheet
        ref={setSheetRef}
        isOpen={isOpen}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
        disableDismiss
        onClose={() => setOpen(false)}
        onSnap={handleSnapChange}
      >
        <SheetContainer bottomInset={bottomInset}>
          <SheetHeader />
          <SheetContent
            // Only scroll when at the upmost snap point
            disableScroll={(state) => state.currentSnap !== lastSnap}
            scrollRef={scrollRef}
            style={{ borderTopColor: contentBorderColor }}
          >
            <SheetSuggestions />
          </SheetContent>
        </SheetContainer>
        <SheetBackdrop />
      </Sheet>
    </Container>
  );
}

function SheetHeader() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { snapTo, currentSnap, snapPoints } = Sheet.useContext();
  const lastSnap = snapPoints.length - 1;

  return (
    <SheetHeaderBase>
      <SearchContainer>
        <SearchWrapper>
          <SearchIconWrapper>
            <FiSearch size={16} />
          </SearchIconWrapper>
          <SearchInput
            ref={inputRef}
            name="search"
            type="text"
            placeholder="Search places"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => {
              if (currentSnap !== lastSnap) snapTo(lastSnap);
            }}
          />
        </SearchWrapper>
        <ProfilePicture
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=John&backgroundColor=b6e3f4,c0aede,d1d4f9"
          alt="Profile"
        />
      </SearchContainer>
    </SheetHeaderBase>
  );
}

function SheetContainer({
  children,
  bottomInset,
  ...props
}: ComponentProps<typeof Sheet.Container> & {
  bottomInset: number;
}) {
  const { y, yProgress } = Sheet.useContext();

  const paddingHorizontal = useSnapPointTransform([
    padding,
    padding,
    padding,
    0,
  ]);

  const paddingBottom = useSnapPointTransform([
    padding + bottomInset,
    padding + bottomInset,
    padding + bottomInset,
    0,
  ]);

  const borderBottomRadius = useSnapPointTransform([
    borderRadius,
    borderRadius,
    borderRadius,
    0,
  ]);

  const borderColor = useMotionTemplate`
    rgba(255, 255, 255, ${useTransform(yProgress, [0.7, 1], [0.1, 0])})
  `;

  const backgroundColor = useMotionTemplate`
    rgba(25, 25, 25, ${useTransform(yProgress, [0.7, 1], [0.6, 1])})
  `;

  const clipPath = useMotionTemplate`
    inset(0px 0px calc(${y}px + ${paddingBottom}px) 0px round ${borderBottomRadius}px)
  `;

  return (
    <SheetContainerBase
      {...props}
      style={{
        ['--padding-horizontal' as any]: paddingHorizontal,
        width: 'calc(100% - var(--padding-horizontal) * 2px)',
        margin: '0 calc(var(--padding-horizontal) * 1px)',
        backgroundColor,
        borderColor,
        clipPath,
      }}
    >
      {children}
    </SheetContainerBase>
  );
}

function SheetBackdrop() {
  const opacity = useSnapPointTransform([0, 0, 0, 0.5]);

  const backgroundColor = useMotionTemplate`
    rgba(0, 0, 0, ${opacity})
  `;

  return <Sheet.Backdrop style={{ backgroundColor }} />;
}

function SheetSuggestions() {
  const contentOpacity = useSnapPointTransform([0, 0, 1, 1]);

  return (
    <Results style={{ opacity: contentOpacity }}>
      <SectionTitle>Suggestions</SectionTitle>
      <Suggestions>
        {places.map((place) => (
          <Suggestion key={place.id}>
            <ResultIcon style={{ backgroundColor: place.bgColor }}>
              {place.icon}
            </ResultIcon>
            <ResultInfo>
              <ResultName>{place.name}</ResultName>
              <ResultAddress>{place.address}</ResultAddress>
            </ResultInfo>
          </Suggestion>
        ))}
      </Suggestions>
    </Results>
  );
}

const SheetContainerBase = styled(Sheet.Container)`
  backdrop-filter: saturate(150%) blur(10px);
  border-top-right-radius: 30px !important;
  border-top-left-radius: 30px !important;
  border-width: 1px;
  border-style: solid;
  border-bottom: none;
  box-shadow: none !important;
`;

const SheetHeaderBase = styled(Sheet.Header)`
  display: flex;
  flex-direction: column;
  padding: 16px;

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
  }
`;

const SheetContent = styled(Sheet.Content)`
  border-top: 1px solid rgba(255, 255, 255, 0);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh; /* Use 100dvh for better mobile support */
`;

const FakeMap = styled.div`
  position: fixed;
  inset: 0;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
`;

const SearchInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  font-size: 16px;
  outline: none;
  color: white;
  caret-color: white;
  padding: 0;

  &::placeholder {
    color: #a5a5a5;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 999px;
  padding: 8px 12px;
  gap: 8px;
  flex: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const ProfilePicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const BackLinkContainer = styled(motion.div)`
  position: fixed;
  top: max(16px, env(safe-area-inset-top));
  left: 16px;
  z-index: 1000;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  padding-left: 2px;
  border-radius: 8px;
  background-color: rgba(35, 35, 35, 0.8);
  backdrop-filter: blur(10px);
`;

const Results = styled(motion.div)`
  padding: 0px 16px 16px 16px;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  color: #ccc;
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 16px 0;
`;

const Suggestions = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Suggestion = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 44px; /* Icon width (32px) + gap (12px) */
    right: -16px;
    height: 1px;
    background-color: rgba(150, 150, 150, 0.1);
  }
`;

const ResultIcon = styled.span`
  font-size: 18px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ResultInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ResultName = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

const ResultAddress = styled.span`
  color: #ccc;
  font-size: 14px;
`;

const places = [
  {
    id: 1,
    name: 'Helsinki Central Station',
    address: 'Kaivokatu 1, 00100 Helsinki',
    icon: '📍',
    bgColor: '#ffe6e6',
  },
  {
    id: 2,
    name: 'Senate Square',
    address: 'Senaatintori, 00170 Helsinki',
    icon: '🏛️',
    bgColor: '#f5f5f5',
  },
  {
    id: 3,
    name: 'Suomenlinna',
    address: '00190 Helsinki',
    icon: '🏰',
    bgColor: '#f4e6a1',
  },
  {
    id: 4,
    name: 'Market Square',
    address: 'Kauppatori, 00170 Helsinki',
    icon: '🏪',
    bgColor: '#ffe4d6',
  },
  {
    id: 5,
    name: 'Temppeliaukio Church',
    address: 'Lutherinkatu 3, 00100 Helsinki',
    icon: '⛪',
    bgColor: '#e6d3c7',
  },
  {
    id: 6,
    name: 'Kamppi Center',
    address: 'Urho Kekkosen katu 1, 00100 Helsinki',
    icon: '🏢',
    bgColor: '#e1ecf4',
  },
  {
    id: 7,
    name: 'Finnish National Opera',
    address: 'Helsinginkatu 58, 00260 Helsinki',
    icon: '🎭',
    bgColor: '#f0e6f0',
  },
  {
    id: 8,
    name: 'Ateneum Art Museum',
    address: 'Kaivokatu 2, 00100 Helsinki',
    icon: '🏛️',
    bgColor: '#f5f5f5',
  },
  {
    id: 9,
    name: 'Esplanadi Park',
    address: 'Pohjoisesplanadi, 00170 Helsinki',
    icon: '🌳',
    bgColor: '#e6f4e6',
  },
  {
    id: 10,
    name: 'Hietaniemi Beach',
    address: 'Hietaranta, 00100 Helsinki',
    icon: '🏖️',
    bgColor: '#fdf4e6',
  },
  {
    id: 11,
    name: 'Stockmann Helsinki Center',
    address: 'Aleksanterinkatu 52, 00100 Helsinki',
    icon: '🏪',
    bgColor: '#ffe4d6',
  },
  {
    id: 12,
    name: 'Kiasma Museum',
    address: 'Mannerheiminaukio 2, 00100 Helsinki',
    icon: '🏢',
    bgColor: '#e1ecf4',
  },
  {
    id: 13,
    name: 'Kaivopuisto Park',
    address: 'Kaivopuisto, 00140 Helsinki',
    icon: '🌊',
    bgColor: '#e6f3ff',
  },
  {
    id: 14,
    name: 'Helsinki Cathedral',
    address: 'Unioninkatu 29, 00170 Helsinki',
    icon: '🏛️',
    bgColor: '#f5f5f5',
  },
  {
    id: 15,
    name: 'Old Market Hall',
    address: 'Eteläranta 1, 00130 Helsinki',
    icon: '🍺',
    bgColor: '#faf3e0',
  },
];
