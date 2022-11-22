import { Song } from '../types';

export function spotifySong(rawFromAPI: any): Song {
  return {
    id: rawFromAPI.id,
    duration: rawFromAPI.duration_ms,
    artist: rawFromAPI.artists[0].name,
    album: {
      name: rawFromAPI.album.name,
      releasedAt: rawFromAPI.album.release_date,
      cover: rawFromAPI.album.images[0].url,
    },
    href: rawFromAPI.preview_url,
  };
}

export default {
  spotifySong,
};
