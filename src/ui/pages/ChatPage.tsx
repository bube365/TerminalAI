import React, { useState } from "react";
import { ChevronDown, Upload, Mic, Send, Plus, ArrowRight } from "lucide-react";
import FileUpload from "../component/Chat/FileUpload.tsx";
import ChatContent from "../component/Chat/ChatContent.tsx";
import AudioWalkthrough from "../component/Chat/Audiowalkthrough.tsx";
import ResourcesPanel from "../component/Chat/ResourcesPanel.tsx";

const ChatPage: React.FC = () => {
  const [hasUploads, setHasUploads] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isAudioGenerated, setIsAudioGenerated] = useState(false);

  const handleFilesUploaded = (files: string[]) => {
    setUploadedFiles(files);
    setHasUploads(files.length > 0);
  };

  const handleGenerateAudio = () => {
    setIsAudioGenerated(true);
  };

  const handleJoinConversation = () => {
    console.log("Joining conversation...");
    // Handle joining conversation logic
  };

  return (
    <main className="flex-1 p-4 lg:p-8 bg-gray-50 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Chats</h1>
          <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-purple-200 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-200">
            Select Expertise
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Chat Area */}
        <div className="xl:col-span-2">
          {!hasUploads ? (
            <FileUpload onFilesUploaded={handleFilesUploaded} />
          ) : (
            <ChatContent uploadedFiles={uploadedFiles} />
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <AudioWalkthrough
            hasContent={hasUploads}
            isAudioGenerated={isAudioGenerated}
            onGenerateAudio={handleGenerateAudio}
            onJoinConversation={handleJoinConversation}
          />
          <ResourcesPanel />
        </div>
      </div>
    </main>
  );
};

export default ChatPage;
