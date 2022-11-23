/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Connect: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Library: undefined;
  Playlists: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type Token = {
  service: library;
  issuedAt: number;
  expiresIn: number | string | undefined;
  type: string;
  value: string;
};

export type UserState = {
  spotifyToken: Token;
  appleToken: Token;
  youtubeToken: Token;
}

export type Album = {
  name: string;
  releasedAt: string;
  cover?: string; // link cover album
}

export type Track = {
  id: string;
  name: string;
  duration: number; // in ms
  artist: string;
  album: Album;
  href?: string;
}

export type library = 'spotify' | 'apple_music' | 'youtube';
