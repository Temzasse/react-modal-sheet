import {
  AnimatePresence,
  interpolate,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'motion/react';
import { useRef, useState } from 'react';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import { Sheet, type SheetRef } from 'react-modal-sheet';
import { Link } from 'react-router';
import styled from 'styled-components';
import bgImg from './map-bg.jpeg';

const snapPoints = [100, 0.5, 1];
const initialSnap = 0;
const lastSnapIndex = snapPoints.length - 1;

export function AppleMaps() {
  const [sheetRef, setSheetRef] = useState<SheetRef | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [snapPoint, setSnapPoint] = useState(initialSnap);
  const close = () => setOpen(false);
  const { scrollY } = useScroll({ container: scrollRef });
  const contentBorderColor = useMotionTemplate`rgba(255, 255, 255, ${useTransform(scrollY, [0, 40], [0, 0.1])})`;

  function handleSheetRef(ref: SheetRef | null) {
    if (!sheetRef && ref) {
      setSheetRef(ref);
    }
  }

  function handleInputFocus() {
    if (snapPoint !== lastSnapIndex) {
      sheetRef?.snapTo(lastSnapIndex);
    }
  }

  return (
    <Container>
      <AnimatePresence>
        {snapPoint < lastSnapIndex && (
          <BackLinkContainer
            key="back-link"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BackLink to="..">
              <FiChevronLeft size={16} />
              <span>Back</span>
            </BackLink>
          </BackLinkContainer>
        )}
      </AnimatePresence>

      <FakeMap />

      <Sheet
        ref={handleSheetRef}
        isOpen={isOpen}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
        disableDismiss
        onClose={close}
        onSnap={setSnapPoint}
      >
        <SheetContainer>
          <SheetHeader>
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
                  onFocus={handleInputFocus}
                />
              </SearchWrapper>
              <ProfilePicture
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=John&backgroundColor=b6e3f4,c0aede,d1d4f9"
                alt="Profile"
              />
            </SearchContainer>
          </SheetHeader>

          <SheetContent
            // Only scroll when at the upmost snap point
            disableScroll={(state) => state.currentSnap !== lastSnapIndex}
            scrollRef={scrollRef}
            style={{ borderTopColor: contentBorderColor }}
          >
            {!!sheetRef && <SheetSuggestions sheetRef={sheetRef} />}
          </SheetContent>
        </SheetContainer>

        {snapPoint === lastSnapIndex && <Sheet.Backdrop />}
      </Sheet>
    </Container>
  );
}

function SheetSuggestions({ sheetRef }: { sheetRef: SheetRef }) {
  const mix = interpolate([100, 150], [0, 1]);

  const contentOpacity = useTransform(() => {
    return mix(sheetRef.yInverted.get());
  });

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

const SheetContainer = styled(Sheet.Container)`
  background-color: rgba(35, 35, 35, 0.8) !important;
  backdrop-filter: blur(10px);
`;

const SheetHeader = styled(Sheet.Header)`
  display: flex;
  flex-direction: column;
  padding: 16px;

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
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
    color: #ccc;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
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
  color: #ccc;
`;

const ProfilePicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const BackLinkContainer = styled(motion.div)`
  position: fixed;
  top: 16px;
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
    background-color: rgba(255, 255, 255, 0.1);
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
