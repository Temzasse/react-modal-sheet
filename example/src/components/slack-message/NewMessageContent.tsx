import { type RefObject } from 'react';
import { Sheet } from 'react-modal-sheet';
import { styled } from 'styled-components';

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
            <PersonStatus online={id % 2 === 0} />
            <PersonName dimmed>{name}</PersonName>
          </Person>
        ))}
      </PeopleList>
    </>
  );
}

const Search = styled.label`
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 16px;
  position: sticky;
  top: 0;
  background-color: #222;
`;

const SearchLabel = styled.span`
  color: #888;
  margin-right: 16px;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: #fff;

  &::placeholder {
    color: #444;
  }
`;

const PeopleList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Person = styled.li`
  display: flex;
  align-items: center;
  outline: none;

  &:focus {
    background-color: #333;
    border-radius: 6px;
  }

  & > * + * {
    margin-left: 16px;
  }
`;

const PersonImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-color: #111;
`;

const PersonName = styled.span<{ dimmed?: boolean }>`
  color: ${(p) => (p.dimmed ? '#888' : '#fff')};
  font-weight: ${(p) => (p.dimmed ? 400 : 600)};
`;

const PersonStatus = styled.div<{ online?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid ${(p) => (p.online ? 'green' : '#888')};
  background-color: ${(p) => (p.online ? 'green' : 'transparent')};
`;
