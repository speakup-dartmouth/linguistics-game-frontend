/* eslint-disable no-nested-ternary */
import { usePlayback, useRecorder } from 'lib/hooks';
import React, { useEffect } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import Pause from 'assets/pause.svg';
import Record from 'assets/record.svg';
import Play from 'assets/play.svg';
import { Question } from 'redux/slices/questionSlice';
import Toggle from 'components/UI/Toggle';
import styles from './styles';
import Waveform from './Waveform';

interface RecordUIProps {
  question: Question;
  selectedOption: string | null;
  setSelectedOption: (option: string) => void;
  setIsBackDisabled: (isDisabled: boolean) => void;
  setIsRecordingMode: (isRecording: boolean) => void;
}

function RecordUI({
  question, selectedOption, setSelectedOption, setIsBackDisabled, setIsRecordingMode,
}: RecordUIProps): JSX.Element {
  const {
    isRecording, recordingUri, startStopRecording, reset, saveRecording, isUploading,
  } = useRecorder();
  const { startStopPlayback, isPlaying } = usePlayback(recordingUri);

  const isRecordingActive = isRecording || !!recordingUri;

  const submitRecording = async () => {
    await saveRecording(question._id, selectedOption);
    setIsRecordingMode(false);
  };

  const onRedoOrPost = (option: string) => {
    if (option === 'Redo') {
      reset();
    } else {
      submitRecording();
    }
  };

  const record = () => {
    if (!selectedOption) {
      return;
    }
    startStopRecording();
  };

  useEffect(() => {
    setIsBackDisabled(isRecording);
  }, [isRecording]);

  return (
    <>
      {!recordingUri && !isRecording && (
      <View style={styles.recordingUi}>
        <Text style={styles.recordingHeader}>Ready?</Text>
        <Text style={styles.recordingSubheader}>Pick a stance:</Text>
        <Toggle disabled={isRecording} options={question.options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        <TouchableOpacity
          style={styles.recordButton}
          onPress={record}
          disabled={!selectedOption}
        ><Text style={styles.kernedText}>{'BEGIN RECORDING >'}</Text>
        </TouchableOpacity>
      </View>
      )}

      {!recordingUri && isRecording && (
        <View style={styles.recordingUi}>
          <Text style={styles.recordingHeader}>Speak up!</Text>
          <Text style={styles.recordingSubheader}>Tell us why you feel that way. Try to speak about this topic for as long as you can, without interruption.</Text>
        </View>
      )}

      {recordingUri && (
        <View style={styles.recordingUi}>
          <Text style={styles.recordingHeader}>Done recording?</Text>
          <Text style={styles.recordingSubheader}>You can rerecord your response or post it now!</Text>
          <Toggle options={['Redo', 'Post']} selectedOption={null} setSelectedOption={onRedoOrPost} disabled={isUploading} />
        </View>
      )}

      <Waveform isRecording={isRecordingActive} />

      <View style={styles.recordingControls}>
        {isRecording
          ? <Pause width={70} height={70} onPress={startStopRecording} /> // Are we currently recording?
          : (recordingUri // Is there a recording available?
            ? (isPlaying // We are in playback mode
              ? <Pause width={70} height={70} onPress={startStopPlayback} />
              : <Play width={70} height={70} onPress={startStopPlayback} />)
            : (
              <Record width={70} height={70} onPress={record} style={{ opacity: !selectedOption ? 0.7 : 1 }} />
            ) // Prompt to record
          )}
      </View>

      <TouchableOpacity style={styles.submit} disabled={!recordingUri || isUploading} onPress={submitRecording}>
        <Text style={[styles.kernedText, recordingUri && !isUploading ? { color: '#3297C1' } : {}]}>SUBMIT RECORDING</Text>
      </TouchableOpacity>
    </>
  );
}

export default RecordUI;
