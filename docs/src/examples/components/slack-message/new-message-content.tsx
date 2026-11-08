import type { RefObject } from 'react';

import { styled } from '../../../../styled-system/jsx';

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
].map((name, i) => ({
  id: i,
  name,
  image: (i: number) => `https://picsum.photos/${i}/200`,
}));

export function NewMessageContent({
  inputRef,
}: {
  inputRef: RefObject<HTMLInputElement>;
}) {
  return (
    <>
      <Search>
        <SearchLabel>To:</SearchLabel>
        <SearchInput
          ref={inputRef}
          placeholder="Search for a channel or conversation"
        />
      </Search>

      <PeopleList>
        {people.map(({ id, name, image }) => (
          <Person key={id} tabIndex={0}>
            <PersonImage src={image(id)} alt={`Profile picture for ${name}`} />
            <PersonName>{name}</PersonName>
            <PersonStatus data-online={id % 2 === 0} />
            <PersonName data-dimmed="true">{name}</PersonName>
          </Person>
        ))}
      </PeopleList>
    </>
  );
}

const Search = styled('label', {
  base: {
    borderTop: '1px solid var(--example-border)',
    borderBottom: '1px solid var(--example-border)',
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    position: 'sticky',
    top: '0',
    backgroundColor: 'var(--example-sheet-bg)',
  },
});

const SearchLabel = styled('span', {
  base: { color: 'var(--example-muted)', marginRight: '16px' },
});

const SearchInput = styled('input', {
  base: {
    background: 'none',
    border: 'none',
    outline: 'none',
    flex: '1',
    color: 'var(--example-text)',
    '&::placeholder': { color: 'var(--example-indicator)' },
  },
});

const PeopleList = styled('ul', {
  base: {
    listStyle: 'none',
    margin: '0',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
});

const Person = styled('li', {
  base: {
    display: 'flex',
    alignItems: 'center',
    outline: 'none',
    '&:focus': {
      backgroundColor: 'var(--example-border)',
      borderRadius: '6px',
    },
    '& > * + *': { marginLeft: '16px' },
  },
});

const PersonImage = styled('img', {
  base: {
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    backgroundColor: 'var(--example-sheet-bg)',
  },
});

const PersonName = styled('span', {
  base: {
    color: 'var(--example-text)',
    fontWeight: '600',
    '&[data-dimmed]': { color: 'var(--example-muted)', fontWeight: '400' },
  },
});

const PersonStatus = styled('div', {
  base: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '1px solid var(--example-indicator)',
    backgroundColor: 'transparent',
    "&[data-online='true']": {
      borderColor: 'green',
      backgroundColor: 'green',
    },
  },
});
