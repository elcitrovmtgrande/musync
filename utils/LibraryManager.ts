import axios from 'axios';
import { library, Track, Token } from '../types';
import { spotifyTrack } from './formatter';


type AxiosHTTPConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${string}` 
  },
};

class LibraryManager {

  private _token: Token;
  private _library: library;

  constructor(token: Token) {
    this._token = token;
    this._library = token.service;
  }

  public getLibrary(): library {
    return this._library;
  }

  public getToken(): Token {
    return this._token;
  }

  public async getTracks(): Promise<Track[]> {
    switch (this._library) {
      case 'spotify':
        return await this._fetchSpotifyMusics();
      default:
        return await this._fetchSpotifyMusics();
    }
  }

  private async _fetchSpotifyMusics(): Promise<Track[]> {
    const HTTPConfig = this._getAxiosConfig();
    const response = await axios.get('https://api.spotify.com/v1/me/tracks', HTTPConfig);
    if(response.status === 200) {
      return response.data.items.map((i: any) => spotifyTrack(i.track));
    } else {
      return [];
    }
  }

  private _getAxiosConfig(): AxiosHTTPConfig {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._token.value}` 
      }
    }
  }
}

export default LibraryManager;
