import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Users } from "lucide-react";

interface AudioPlayerProps {
  title: string;
  materialCount: number;
  duration: string;
  onJoinConversation: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title,
  materialCount,
  duration,
  onJoinConversation,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const totalDuration = 523; // 08:43 in seconds
  const progressRef = useRef<HTMLDivElement>(null);

  // Convert seconds to MM:SS format
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Simulate audio progress
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying && currentTime < totalDuration) {
      interval = setInterval(() => {
        setCurrentTime((prev) => Math.min(prev + 1, totalDuration));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, totalDuration]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = Math.floor(percentage * totalDuration);
      setCurrentTime(newTime);
    }
  };

  const resetAudio = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  // Generate waveform bars
  const generateWaveform = () => {
    const bars = [];
    for (let i = 0; i < 60; i++) {
      const height = Math.random() * 40 + 10; // Random height between 10-50px
      const isActive = i / 60 <= currentTime / totalDuration;
      bars.push(
        <div
          key={i}
          className={`w-1 rounded-full transition-colors duration-200 ${
            isActive ? "bg-purple-600" : "bg-gray-300"
          }`}
          style={{ height: `${height}px` }}
        />
      );
    }
    return bars;
  };

  const progressPercentage = (currentTime / totalDuration) * 100;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Audio Walkthrough
        </h3>
        <button
          onClick={resetAudio}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <RotateCcw className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Audio Player Card */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={togglePlayPause}
            className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-200"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </button>

          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>{materialCount} materials</span>
              <span>{formatTime(currentTime)}</span>
              <span>Generated today</span>
            </div>
          </div>

          <button className="p-1 hover:bg-gray-200 rounded transition-colors duration-200">
            <RotateCcw className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Waveform Visualization */}
        <div className="mb-3">
          <div className="flex items-center justify-center gap-1 h-12 mb-2">
            {generateWaveform()}
          </div>

          {/* Progress Bar */}
          <div
            ref={progressRef}
            className="relative h-1 bg-gray-300 rounded-full cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="absolute top-0 left-0 h-full bg-purple-600 rounded-full transition-all duration-200"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Time Display */}
        <div className="flex justify-between text-xs text-gray-500">
          <span>{formatTime(currentTime)}</span>
          <span>{duration}</span>
        </div>
      </div>

      {/* Join Conversation Button */}
      <button
        onClick={onJoinConversation}
        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium flex items-center justify-center gap-2"
      >
        <Users className="w-4 h-4" />
        Join the conversation
      </button>
    </div>
  );
};

export default AudioPlayer;
