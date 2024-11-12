export interface RecordMineType {
  extension: 'webm' | 'mp4' | 'mp3' | 'wav';
  mineType: 'audio/webm' | 'audio/mp4' | 'audio/wav' | 'audio/mp3';
}

export const getRecordMineType = (): RecordMineType => {
  try {
    return MediaRecorder.isTypeSupported('audio/wav')
      ? {
          extension: 'wav',
          mineType: 'audio/wav',
        }
      : {
          extension: 'mp3',
          mineType: 'audio/mp3',
        };
  } catch {
    return {
      extension: 'wav',
      mineType: 'audio/wav',
    };
  }
};
