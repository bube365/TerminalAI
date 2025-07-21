import React, { useState } from "react";
import { Send, RotateCcw } from "lucide-react";

interface ChatContentProps {
  uploadedFiles: string[];
}

const ChatContent: React.FC<ChatContentProps> = ({ uploadedFiles }) => {
  const [message, setMessage] = useState("");
  const [suggestedQuestions] = useState([
    "Why is saving important?",
    "Why is saving important?",
    "Why is saving important?",
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-xl">
      {/* Chat Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              Finance Management
            </h2>
            <p className="text-sm text-gray-500">Quick Summary</p>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <RotateCcw className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Chat Content */}
      <div className="p-6">
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            These resources provide thorough guidance on personal finance,
            covering strategies for budgeting, saving, investing, and managing
            debt. They stress the importance of setting financial goals across
            short-, mid-, and long-term horizons and encourage taking early
            steps to build wealth, especially for retirement. Many highlight
            common financial pitfalls to avoid and emphasize the value of
            financial literacy, recommending AI tools for seamless money
            management and consulting professionals when necessary.
            Additionally, they discuss the role of financial institutions and
            government agencies in enhancing financial well-being, while
            offering practical advice on securing online accounts and
            recognising investment scams.
          </p>
        </div>

        {/* Warning Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">!</span>
            </div>
            <p className="text-amber-800 text-sm">
              Generated responses will be based off the expertise that has been
              selected.
            </p>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="space-y-3 mb-6">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              className="block w-full text-left px-4 py-3 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors duration-200"
              onClick={() => setMessage(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-6 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask question based off uploads"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {uploadedFiles.length} uploads
            </span>
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className={`p-3 rounded-lg transition-colors duration-200 ${
                message.trim()
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
