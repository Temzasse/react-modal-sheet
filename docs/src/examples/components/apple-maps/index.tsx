import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';
import { type ComponentProps, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Sheet } from 'react-modal-sheet';

import { styled } from '../../../../styled-system/jsx';
import { token } from '../../../../styled-system/tokens';
import { useSafeAreaInsets } from '../../hooks/use-safe-area-insets';
import { useSnapPointTransform } from '../../hooks/use-sheet-snap-transform';
import mapBackground from './map-bg.jpeg?url';

const padding = 8;
const borderRadius = 30;
const headerHeight = 67;

export function AppleMaps() {
  const [isOpen, setOpen] = useState(true);
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
      <FakeMap
        style={{
          backgroundImage: `url(${mapBackground})`,
        }}
      />

      <Sheet
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
            style={{
              borderTopColor: contentBorderColor,
            }}
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
    color-mix(in srgb, ${token.var('colors.$surface.indicator')} ${useTransform(yProgress, [0.7, 1], [40, 0])}%, transparent)
  `;

  const backgroundColor = useMotionTemplate`
    color-mix(in srgb, ${token.var('colors.$surface.sheet')} ${useTransform(yProgress, [0.7, 1], [60, 100])}%, transparent)
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

  return (
    <Sheet.Backdrop
      style={{
        backgroundColor,
      }}
    />
  );
}

function SheetSuggestions() {
  const contentOpacity = useSnapPointTransform([0, 0, 1, 1]);

  return (
    <Results
      style={{
        opacity: contentOpacity,
      }}
    >
      <SectionTitle>Suggestions</SectionTitle>
      <Suggestions>
        {places.map((place) => (
          <Suggestion key={place.id}>
            <ResultIcon
              style={{
                backgroundColor: place.bgColor,
              }}
            >
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

const Container = styled('div', {
  base: {
    position: 'relative',
    width: '100%',
    height: '100dvh',
  },
});

const FakeMap = styled('div', {
  base: {
    position: 'fixed',
    inset: '$0',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
});

const SheetContent = styled(Sheet.Content, {
  base: {
    borderTop: '1px solid rgba(255, 255, 255, 0)',
  },
});

const SheetHeaderBase = styled(Sheet.Header, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '$4',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '$1',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '50px',
      height: '4px',
      backgroundColor: '$surface.indicator',
      borderRadius: '2px',
    },
  },
});

const SearchContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
  },
});

const SearchWrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '$surface.app',
    borderRadius: '999px',
    padding: '{spacing.$2} {spacing.$3}',
    gap: '$2',
    flex: '1',
  },
});

const SearchIconWrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    color: '$surface.text',
  },
});

const SearchInput = styled('input', {
  base: {
    flex: '1',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16px',
    outline: 'none',
    color: '$surface.text',
    caretColor: '$surface.text',
    padding: '$0',
    '&::placeholder': {
      color: '$surface.muted',
    },
  },
});

const ProfilePicture = styled('img', {
  base: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
});

const SheetContainerBase = styled(Sheet.Container, {
  base: {
    backdropFilter: 'saturate(150%) blur(10px)',
    borderTopRightRadius: '30px !important',
    borderTopLeftRadius: '30px !important',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderBottom: 'none',
    boxShadow: 'none !important',
  },
});

const Results = styled(motion.div, {
  base: {
    padding: '0px {spacing.$4} {spacing.$4} {spacing.$4}',
    display: 'flex',
    flexDirection: 'column',
  },
});

const SectionTitle = styled('h3', {
  base: {
    color: '$surface.muted',
    fontSize: '14px',
    fontWeight: '500',
    margin: '0 0 {spacing.$4} 0',
  },
});

const Suggestions = styled('ul', {
  base: {
    listStyle: 'none',
    padding: '$0',
    margin: '$0',
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
});

const Suggestion = styled('li', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    padding: '{spacing.$2} 0',
    position: 'relative',
    '&:not(:last-child)::after': {
      content: "''",
      position: 'absolute',
      bottom: '-4px',
      left: '44px',
      right: '-16px',
      height: '1px',
      backgroundColor: 'rgba(150, 150, 150, 0.1)',
    },
  },
});

const ResultIcon = styled('span', {
  base: {
    fontSize: '18px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const ResultInfo = styled('div', {
  base: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
  },
});

const ResultName = styled('span', {
  base: {
    color: '$surface.text',
    fontSize: '16px',
    fontWeight: '500',
  },
});

const ResultAddress = styled('span', {
  base: {
    color: '$surface.muted',
    fontSize: '14px',
  },
});
