import React, { useEffect } from "react";
import {
  AvatarQuality,
  ElevenLabsModel,
  STTProvider,
  VoiceEmotion,
  StartAvatarRequest,
  VoiceChatTransport,
} from "@heygen/streaming-avatar";

const DEFAULT_CONFIG: StartAvatarRequest = {
  quality: AvatarQuality.High,
  avatarName: "Anthony_White_Suit_public",
  knowledgeId: "780b5949e9f14529b0d62b0ce4abcdc2",
  voice: {
    rate: 1.5,
    emotion: VoiceEmotion.EXCITED,
    model: ElevenLabsModel.eleven_flash_v2_5,
  },
  language: "en",
  voiceChatTransport: VoiceChatTransport.WEBSOCKET,
  sttSettings: {
    provider: STTProvider.DEEPGRAM,
  },
};

interface AvatarConfigProps {
  onConfigChange: (config: StartAvatarRequest) => void;
}

export const AvatarConfig: React.FC<AvatarConfigProps> = ({ onConfigChange }) => {
  useEffect(() => {
    onConfigChange(DEFAULT_CONFIG);
    // You can also auto-trigger voice start logic here if needed
  }, [onConfigChange]);

  return (
    <div className="flex flex-col items-center justify-center h-full text-zinc-200 text-lg">
      Chat With Chala
    </div>
  );
};
