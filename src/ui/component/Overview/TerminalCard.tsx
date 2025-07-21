import React from "react";
import { Plus, ArrowRight, MoreHorizontal } from "lucide-react";
import dollarIcon from "../../assets/dollarCoin.svg";

interface TerminalCardProps {
  type: "create" | "existing";
  title?: string;
  description?: string;
  date?: string;
  onViewTerminal?: () => void;
}

const TerminalCard: React.FC<TerminalCardProps> = ({
  type,
  title,
  description,
  date,
  onViewTerminal,
}) => {
  if (type === "create") {
    return (
      <div className="relative bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl p-6 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
        <div className="flex flex-col items-center justify-center h-full min-h-[200px]">
          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-4">
            <Plus className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold">Create New Terminal</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl h-full flex flex-col justify-between p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img src={dollarIcon} alt="" />

          <button className="p-1 hover:bg-gray-100 rounded transition-colors duration-200">
            <MoreHorizontal className=" text-[#A4A7AE]" />
          </button>
        </div>

        <h3 className="text-base font-semibold text-gray-700 mb-2">{title}</h3>
      </div>
      <p className="text-[13px] text-[#A4A7AE] mb-4 ">{description}</p>

      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{date}</span>

        <button
          onClick={onViewTerminal}
          className="flex text-xs items-center gap-2 text-brand-600  font-semibold transition-colors duration-200 group"
        >
          View terminal
          <div className="border border-brand-600 p-[2px] rounded-full">
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </button>
        {/* <button className="flex items-center gap-2 text-brand-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200 group">
          View terminal
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button> */}
      </div>
    </div>
  );
};

export default TerminalCard;
