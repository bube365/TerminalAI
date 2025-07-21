import React from "react";
import { Mic } from "lucide-react";
import AudioPlayer from "./AudioPlayer";

interface AudioWalkthroughProps {
  hasContent: boolean;
  isAudioGenerated?: boolean;
  onGenerateAudio?: () => void;
  onJoinConversation?: () => void;
}

const AudioWalkthrough: React.FC<AudioWalkthroughProps> = ({
  hasContent,
  isAudioGenerated = false,
  onGenerateAudio,
  onJoinConversation,
}) => {
  if (isAudioGenerated) {
    return (
      <AudioPlayer
        title="Your Research Audio Summary"
        materialCount={2}
        duration="08:43"
        onJoinConversation={onJoinConversation || (() => {})}
      />
    );
  }

  return (
    <div className="bg-white rounded-xl p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Audio Walkthrough
      </h3>

      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mic className="w-8 h-8 text-purple-600" />
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          Upload your materials and an engaging audio discussion between two
          hosts exploring your content will be generated.
        </p>
      </div>

      {hasContent && (
        <button
          onClick={onGenerateAudio}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
        >
          Generate Audio
        </button>
      )}
    </div>
  );
};

export default AudioWalkthrough;
