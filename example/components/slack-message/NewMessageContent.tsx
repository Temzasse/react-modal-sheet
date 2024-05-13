import { type RefObject } from 'react';
import { styled } from 'styled-components';
import { Sheet } from 'react-modal-sheet';

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
  // Use index to randomize the returned image
  image: (i: number) => `https://source.unsplash.com/collection/1602384/${100 + i}x${100 + i}?crop=faces`, // prettier-ignore
}));

export function NewMessageContent({
  inputRef,
}: {
  inputRef: RefObject<HTMLInputElement>;
}) {
  return (
    <Wrapper>
      <Search>
        <SearchLabel>To:</SearchLabel>
        <SearchInput
          ref={inputRef}
          placeholder="Search for a channel or conversation"
        />
      </Search>

      <Sheet.Scroller>
        <PeopleList>
          {people.map(({ id, name, image }) => (
            <Person key={id} tabIndex={0}>
              <PersonImage
                src={image(id)}
                alt={`Profile picture for ${name}`}
              />
              <PersonName>{name}</PersonName>
              <PersonStatus online={id % 2 === 0} />
              <PersonName dimmed>{name}</PersonName>
            </Person>
          ))}
        </PeopleList>
      </Sheet.Scroller>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

const Search = styled.label`
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 16px;
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
