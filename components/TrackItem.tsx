import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment';
import { Track } from '../types';

type TrackItemProps = Track & {
  onPress?: () => void;
};

export const TrackItem = ({
  name,
  duration,
  artist,
  album,
  onPress,
}: TrackItemProps) => {
  const time = moment.duration(duration, 'milliseconds');
  const minutes = time.minutes();
  const seconds = time.seconds();

  return (
    <TouchableOpacity style={styles.track} onPress={onPress}>
      <View style={styles.left}>
        <Image
          style={styles.cover}
          source={{
            uri: album.cover,
          }}
        />
        <View style={styles.infos}>
          <Text style={styles.name} ellipsizeMode="tail">{name}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
      <Text style={styles.duration}>
        {`${String(minutes).length === 1 ? `0${minutes}` : minutes}:${String(seconds).length === 1 ? `0${seconds}` : seconds}`}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  track: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  infos: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    width: 300,
  },
  artist: {
    fontSize: 12,
    color: 'grey',
  },
  duration: {
    color: 'grey',
  },
});

export default TrackItem;