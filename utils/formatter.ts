import { Track } from '../types';

export function spotifyTrack(rawFromAPI: any): Track {
  return {
    id: rawFromAPI.id,
    name: rawFromAPI.name,
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
  spotifyTrack,
};
