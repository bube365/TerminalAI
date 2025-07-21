import React from "react";
import { ArrowRight } from "lucide-react";
import FolderCard from "../component/Overview/FolderCard.tsx";

const FoldersPage: React.FC = () => {
  const folderData = [
    {
      title: "Finance",
      description: "Strategies for budgeting",
      noteCount: 5,
    },
    {
      title: "Finance",
      description: "Strategies for budgeting",
      noteCount: 5,
    },
    {
      title: "Finance",
      description: "Strategies for budgeting",
      noteCount: 5,
    },
    {
      title: "Finance",
      description: "Strategies for budgeting",
      noteCount: 5,
    },
    {
      title: "Finance",
      description: "Strategies for budgeting",
      noteCount: 5,
    },
    {
      title: "Finance",
      description: "Strategies for budgeting",
      noteCount: 5,
    },
    {
      title: "Finance",
      description: "Strategies for budgeting",
      noteCount: 5,
    },
    {
      title: "Finance",
      description: "Strategies for budgeting",
      noteCount: 5,
    },
  ];

  return (
    <main className="flex-1 p-4 lg:p-8 bg-gray-50 overflow-y-auto">
      {/* Terminal Folders Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-base border-b pb-1 border-gray-500 font-semibold text-gray-500">
            Terminal Folders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {folderData.map((folder, index) => (
            <FolderCard
              key={index}
              title={folder.title}
              description={folder.description}
              noteCount={folder.noteCount}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default FoldersPage;
