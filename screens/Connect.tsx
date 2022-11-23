import React, { useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import { Dimensions, Platform, StyleSheet } from "react-native";
import * as AppleAuthentication from 'expo-apple-authentication';
import * as WebBrowser from 'expo-web-browser';
import { useSelector, useDispatch } from 'react-redux';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';

import { Text, View } from "../components/Themed";
import { Button } from "../components";
import { Token, UserState } from '../types';
import { updateSpotify } from '../store/features/userSlice';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function Connect() {
  const session = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const [spotifyRequest, spotifyAuth, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: "1c88bd4bf5a34a70b998ce62125f9de7",
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
        "user-library-read"
      ],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: "exp://127.0.0.1:19000/",
    },
    discovery
  );

  useEffect(() => {
    if (spotifyAuth?.type === 'success' && spotifyAuth.authentication) {
      const token: Token = {
        service: 'spotify',
        type: spotifyAuth.authentication.tokenType,
        issuedAt: spotifyAuth.authentication.issuedAt,
        expiresIn: spotifyAuth.authentication.expiresIn,
        value: spotifyAuth.authentication.accessToken,
      };
      dispatch(updateSpotify(token));
    }
  }, [spotifyAuth]);

  async function onAppleConnect() {
    // TODO
    // Utiliser ici l'API MusicKit (Apple)
    // En passant par une custom WebBrowser authSession
  }

  async function onSpotifyLogout() {
    dispatch(updateSpotify(null));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect</Text>
      <Text style={styles.subtitle}>Please connect to the services you want to import your music.</Text>
      {!session.spotifyToken ? (
        <Button
          label="Spotify"
          icon="FontAwesome5.spotify"
          iconColor="#1CE68C"
          style={styles.btn}
          disabled={!spotifyRequest}
          onPress={() => {
            promptAsync();
          }}
        />
      ) : (
        <View style={[styles.signedInRow, styles.btn]}>
          <Button
            label="Connected"
            icon="FontAwesome5.spotify"
            iconColor="#1CE68C"
            style={styles.signedInBtn}
            disabled
          />
          <Button
            icon="MaterialCommunityIcons.logout"
            bgColor="#f75151"
            color="white"
            width={50}
            height={50}
            onPress={onSpotifyLogout}
          />
        </View>
      )}
      <Button
        label="Apple Music"
        icon="FontAwesome5.apple"
        style={styles.btn}
        onPress={onAppleConnect}
      />
      <Button
        label="YouTube"
        icon="FontAwesome5.youtube"
        iconColor="#FF0100"
        style={styles.btn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 40,
    paddingLeft: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  btn: {
    marginBottom: 20,
  },
  signedInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  signedInBtn: {
    width: Dimensions.get('window').width - 80 - 50 - 20,
  },
});
