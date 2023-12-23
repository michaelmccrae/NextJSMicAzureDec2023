"use client"

import * as React from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

function Mictwo() {
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        downloadOnSavePress={true}
        downloadFileExtension="mp3"
        showVisualizer={true}
      />
      <br />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
      <br />
    </div>
  );
}

export default Mictwo;