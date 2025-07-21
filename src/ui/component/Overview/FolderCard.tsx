import React from "react";
import { FolderOpen, MoreHorizontal } from "lucide-react";

interface FolderCardProps {
  title: string;
  description: string;
  noteCount: number;
}

const FolderCard: React.FC<FolderCardProps> = ({
  title,
  description,
  noteCount,
}) => {
  return (
    <div className="bg-white rounded-xl  border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
      <h3 className="text-base font-semibold px-4 py-2 text-gray-700 mb-2 border-b border-gray-200">
        {title}
      </h3>

      <div className="p-4">
        <p className="text-xs text-gray-700 font-semibold mb-4">
          {description}
        </p>

        <div className="text-xs font-semibold bg-brand-50 text-brand-600 w-fit  px-2 rounded-lg">
          {noteCount} notes
        </div>
      </div>

      <div className="border-t border-gray-200 flex justify-between items-start px-4 pt-4">
        <FolderOpen className="w-5 h-5 text-gray-700" />

        <button className="p-1  hover:bg-gray-100 rounded transition-colors duration-200">
          <MoreHorizontal className=" text-[#A4A7AE]" />
        </button>
      </div>
    </div>
  );
};

export default FolderCard;
