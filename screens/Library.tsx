import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import LibraryManager from '../utils/LibraryManager';
import { Track } from '../types';
import { TrackItem } from '../components';

export default function Library({ navigation }: RootTabScreenProps<"Library">) {
  const session = useSelector((state: any) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    async function getSpotifyTracks() {
      if (session.spotifyToken) {
        setLoading(true);
        const Spotify = new LibraryManager(session.spotifyToken);
        const tracks = await Spotify.getTracks();
        console.log(tracks)
        setTracks(tracks);
        setLoading(false);
      } else {
        setTracks([]);
      }
    }
    getSpotifyTracks();
  }, [session.spotifyToken, setLoading]);

  return (
    <View style={[styles.container, !loading && styles.list]}>
      <ScrollView style={styles.scrollView}>
        {loading ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <>
            {tracks.map((t) => (
              <TrackItem
                id={t.id}
                key={t.id}
                artist={t.artist}
                name={t.name}
                duration={t.duration}
                href={t.href}
                album={t.album}
              />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: '100%',
  },
  list: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
