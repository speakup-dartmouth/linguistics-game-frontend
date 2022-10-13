import { AVPlaybackStatus, AVPlaybackStatusSuccess } from 'expo-av';

export function isAVPlaybackStatusSuccess(status: AVPlaybackStatus): status is AVPlaybackStatusSuccess {
  return (status as AVPlaybackStatusSuccess).durationMillis !== undefined;
}
