import cover from './album-cover.webp?url';

export type Song = {
  title: string;
  duration: number;
};

export type Album = {
  name: string;
  year: string;
  artist: string;
  genre: string;
  image: string;
  songs: readonly Song[];
};

export const album = {
  name: 'Uncaught Feelings',
  year: '2026',
  artist: 'The Merge Conflicts',
  genre: 'Alternative / Indie',
  image: cover,
  songs: [
    { title: 'It Works on My Machine', duration: 224 },
    { title: 'Somebody That I Used to Git', duration: 241 },
    { title: 'Smells Like Merge Conflict', duration: 216 },
    { title: '404: Love Not Found', duration: 198 },
    { title: 'Another One Bytes the Dust', duration: 235 },
    { title: 'Sweet Dreams (Are Made of PRs)', duration: 208 },
    { title: 'Promise Me You’ll Await', duration: 253 },
    { title: 'Wake Me Up Before You Go Go.mod', duration: 227 },
    { title: 'I Want to Break .free()', duration: 212 },
    { title: 'Never Gonna Git You Up', duration: 233 },
    { title: 'While My Compiler Gently Weeps', duration: 268 },
    { title: 'Goodbye, World!', duration: 189 },
  ],
} as const satisfies Album;
