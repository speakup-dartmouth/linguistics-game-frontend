import {
  TouchableOpacity, Text,
} from 'react-native';
import { Audio, AVPlaybackStatus, AVPlaybackStatusSuccess } from 'expo-av';
import { useState } from 'react';
import styles from './styles';

function PlayButton({ recordingUri }: {recordingUri: string}): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const onPress = async (): Promise<void> => {
    if (isPlaying) {
      setIsPlaying(false);
      await sound?.stopAsync();
      return;
    }

    setIsPlaying(true);
    if (!sound) {
      const { sound: s } = await Audio.Sound.createAsync({ uri: recordingUri }, {}, setPlaybackStatus);
      await s.setIsLoopingAsync(true);
      setSound(s);
      s.playAsync();
    } else {
      sound.playAsync();
    }
  };

  const duration = playbackStatus ? ((playbackStatus as AVPlaybackStatusSuccess).durationMillis / 1000) : 0;
  const progress = playbackStatus ? ((playbackStatus as AVPlaybackStatusSuccess).positionMillis / 1000) : 0;

  return (
    <>
      <TouchableOpacity style={styles.playButton} onPress={onPress}>
        <Text style={styles.playButtonText}>{isPlaying ? 'Stop' : 'Play'}</Text>
      </TouchableOpacity>
      {playbackStatus && <Text>{`${progress} / ${duration}`}</Text>}
    </>
  );
}

export default PlayButton;
