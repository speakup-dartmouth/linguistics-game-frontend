import {
  TouchableOpacity, Text,
} from 'react-native';
import { Audio, AVPlaybackStatus, AVPlaybackStatusSuccess } from 'expo-av';
import { useEffect, useState } from 'react';
import styles from './styles';

// Get mm:ss from seconds
// Note: this does not work for times > 1 hour currently.
function formatTime(seconds: number): string {
  return new Date(seconds * 1000).toISOString().slice(14, 19);
}

function PlayButton({ recordingUri }: {recordingUri: string}): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    if (!sound) {
      return;
    }

    if (isPlaying) {
      sound.playAsync();
    } else {
      sound.pauseAsync();
    }
  }, [isPlaying, sound]);

  const onPress = async (): Promise<void> => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    if (!sound) {
      const { sound: s, status } = await Audio.Sound.createAsync({ uri: recordingUri }, {}, setPlaybackStatus);
      await s.setIsLoopingAsync(true);
      setSound(s);
      setPlaybackStatus(status);
    }

    setIsPlaying(true);
  };

  const duration = playbackStatus ? ((playbackStatus as AVPlaybackStatusSuccess).durationMillis / 1000) : 0;
  const progress = playbackStatus ? ((playbackStatus as AVPlaybackStatusSuccess).positionMillis / 1000) : 0;

  return (
    <>
      <TouchableOpacity style={styles.playButton} onPress={onPress}>
        <Text style={styles.playButtonText}>{isPlaying ? 'Stop' : 'Play'}</Text>
      </TouchableOpacity>

      {playbackStatus && <Text style={styles.timeText}>{`${formatTime(progress)} / ${formatTime(duration)}`}</Text>}
    </>
  );
}

export default PlayButton;
