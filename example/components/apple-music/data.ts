export interface Album {
  name: string;
  year: string;
  artist: string;
  genre: string;
  image: string;
  songs: string[];
}

export const album: Album = {
  name: 'Gamification Burn Rate',
  year: '2020',
  artist: 'Niche Market',
  genre: 'Indie Techno',
  image: 'https://source.unsplash.com/WDuVbCMMlSg/400x400',
  songs: [
    'Gamification investor seed money',
    'Gen-z iPad',
    'Bandwidth influencer',
    'Paradigm shift',
    'Buzz entrepreneur',
    'Android disruptive',
    'Marketing rockstar',
    'Focus',
    'Gen-z return',
    'Accelerator ownership',
    'Termsheet iteration incubator',
    'Pivot seed',
  ],
};

export const preloadImages = () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = album.image;
  document.head.appendChild(link);
};

// This is for better animation perf on Safari
preloadImages();
