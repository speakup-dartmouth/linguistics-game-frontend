import {
  TouchableOpacity, Text, View,
} from 'react-native';
import { Audio, AVPlaybackStatus, AVPlaybackStatusSuccess } from 'expo-av';
import { useEffect, useState } from 'react';
import styles from './styles';

// Get mm:ss from seconds
function formatTime(seconds: number): string {
  if (Number.isNaN(seconds)) { return '0'; }

  const hours = Math.floor(seconds / 3600);
  const remainder = seconds % 3600;
  const mmss = new Date(remainder * 1000).toISOString().slice(14, 19);
  return hours > 0 ? `${hours}:${mmss}` : mmss;
}

function PlayButton({ recordingUri }: {recordingUri: string}): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackStatus, setPlaybackStatus] = useState<AVPlaybackStatus | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const createSound = async (): Promise<void> => {
    const { sound: s, status } = await Audio.Sound.createAsync({ uri: recordingUri }, {}, setPlaybackStatus);
    await s.setIsLoopingAsync(true);
    setSound(s);
    setPlaybackStatus(status);
  };

  // When the recordingUri changes, create a new sound for playback.
  useEffect(() => {
    createSound();

    // To address memory leaks
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [recordingUri]);

  // Play/pause the sound when isPlaying changes.
  useEffect(() => {
    if (!sound) {
      return;
    }

    // See https://github.com/expo/expo/issues/9915#issuecomment-814270274
    Audio.setAudioModeAsync({ allowsRecordingIOS: false });

    if (isPlaying) {
      sound.playAsync();
    } else {
      sound.pauseAsync();
    }
  }, [isPlaying, sound]);

  const onPress = (): void => setIsPlaying((p) => !p);

  // Type casting here due to annoying quirk in expo-av with AVPlaybackStatus
  const duration = playbackStatus && (playbackStatus as AVPlaybackStatusSuccess).durationMillis ? ((playbackStatus as AVPlaybackStatusSuccess).durationMillis / 1000) : 0;
  const progress = playbackStatus && (playbackStatus as AVPlaybackStatusSuccess).positionMillis ? ((playbackStatus as AVPlaybackStatusSuccess).positionMillis / 1000) : 0;
  const isLoaded = playbackStatus?.isLoaded;

  return (
    <View>
      <TouchableOpacity style={styles.playButton} onPress={onPress} disabled={!isLoaded}>
        <Text style={styles.playButtonText}>{isPlaying ? 'Stop' : 'Play'}</Text>
      </TouchableOpacity>

      {playbackStatus && <Text style={styles.timeText}>{!isLoaded ? 'Loading...' : `${formatTime(progress)} / ${formatTime(duration)}`}</Text>}
    </View>
  );
}

export default PlayButton;
