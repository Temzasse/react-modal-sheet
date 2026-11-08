import type { RefObject } from 'react';

import { styled } from '../../../../styled-system/jsx';

export function NewMessageContent({
  inputRef,
}: {
  inputRef: RefObject<HTMLInputElement | null>;
}) {
  return (
    <>
      <SearchArea>
        <Search>
          <RecipientLabel>To:</RecipientLabel>
          <SearchInput
            ref={inputRef}
            aria-label="Search recipients"
            placeholder="Search for a person"
          />
        </Search>
      </SearchArea>
      <SectionLabel>Suggested people</SectionLabel>
      <PeopleList>
        {people.map((name, id) => (
          <Person key={name}>
            <PersonAvatar data-tone={id % 4} aria-hidden="true">
              {name.slice(0, 2).toUpperCase()}
            </PersonAvatar>
            <PersonInfo>
              <PersonName>
                {name}
                <PersonStatus data-online={id % 2 === 0} aria-hidden="true" />
              </PersonName>
              <PersonHandle>@{name}</PersonHandle>
            </PersonInfo>
          </Person>
        ))}
      </PeopleList>
    </>
  );
}

const people = [
  'john',
  'hannah',
  'trevor',
  'greg',
  'mary',
  'gigi',
  'kendal',
  'mark',
  'fiona',
  'herman',
  'juno',
  'beatrice',
];

const SearchArea = styled('div', {
  base: {
    position: 'sticky',
    top: '0',
    zIndex: '1',
    background: 'var(--slack-bg)',
    padding: '0 16px 16px',
    '&::after': {
      content: "''",
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      height: '1px',
      background: 'var(--slack-border)',
      transform: 'scaleY(var(--slack-hairline-scale))',
      transformOrigin: 'bottom',
      pointerEvents: 'none',
    },
  },
});
const Search = styled('label', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '13px 14px',
    borderRadius: '12px',
    background: 'var(--slack-search-bg)',
    border: '1px solid var(--slack-border)',
    color: 'var(--slack-muted)',
    '&:focus-within': {
      borderColor: 'var(--slack-accent)',
    },
    '& svg': {
      flexShrink: '0',
    },
  },
});
const SearchInput = styled('input', {
  base: {
    width: '100%',
    minWidth: '0',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    color: 'var(--slack-text)',
    fontSize: '16px',
    lineHeight: '1.2',
    '&::placeholder': {
      color: 'var(--slack-muted)',
    },
  },
});
const RecipientLabel = styled('span', {
  base: {
    fontSize: '15px',
    fontWeight: '500',
    color: 'var(--slack-muted)',
  },
});
const SectionLabel = styled('h3', {
  base: {
    margin: '20px 20px 12px',
    fontSize: '13px',
    fontWeight: '700',
    color: 'var(--slack-muted)',
  },
});
const PeopleList = styled('ul', {
  base: {
    listStyle: 'none',
    padding: '0 18px max(24px, env(safe-area-inset-bottom))',
    margin: '0',
  },
});
const Person = styled('li', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '11px 0',
  },
});
const PersonAvatar = styled('span', {
  base: {
    display: 'grid',
    placeItems: 'center',
    flexShrink: '0',
    width: '42px',
    height: '42px',
    borderRadius: '9px',
    background: '#8c6ba5',
    color: '#fff',
    fontWeight: '700',
    fontSize: '13px',
    '&[data-tone="1"]': {
      background: '#5b8792',
    },
    '&[data-tone="2"]': {
      background: '#ad8266',
    },
    '&[data-tone="3"]': {
      background: '#6f8a76',
    },
  },
});
const PersonInfo = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
});
const PersonName = styled('span', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '15px',
    fontWeight: '700',
    color: 'var(--slack-text)',
  },
});
const PersonHandle = styled('span', {
  base: {
    fontSize: '12px',
    color: 'var(--slack-muted)',
  },
});
const PersonStatus = styled('span', {
  base: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    border: '1px solid var(--slack-muted)',
    '&[data-online="true"]': {
      background: '#3da77e',
      borderColor: '#3da77e',
    },
  },
});
