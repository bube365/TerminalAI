import React from "react";
import { ArrowRight } from "lucide-react";
import TerminalCard from "./TerminalCard.tsx";
import FolderCard from "./FolderCard.tsx";

const Dashboard: React.FC = () => {
  const terminalData = [
    {
      title: "Managing Finances",
      description:
        "These materials give comprehensive insights into personal finance, with strategies for budgeting...",
      date: "Today",
    },
    {
      title: "Managing Finances",
      description:
        "These materials give comprehensive insights into personal finance, with strategies for budgeting...",
      date: "16 Mar, 2025",
    },
    {
      title: "Managing Finances",
      description:
        "These materials give comprehensive insights into personal finance, with strategies for budgeting...",
      date: "20 Apr, 2025",
    },
  ];

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
  ];

  return (
    <main className="flex-1 h-[100vh]  p-4 lg:p-8 bg-gray-50 overflow-y-auto">
      {/* Generated Terminals Section */}
      <section className="mb-24">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-base border-b pb-1 border-gray-500 font-semibold text-gray-500">
            Generated Terminals
          </h2>
          <button className="flex text-[13px] items-center gap-4 text-brand-600  font-semibold transition-colors duration-200 group">
            See all notes
            <div className="border border-brand-600 p-1 rounded-full">
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <TerminalCard type="create" />
          {terminalData.map((terminal, index) => (
            <TerminalCard
              key={index}
              type="existing"
              title={terminal.title}
              description={terminal.description}
              date={terminal.date}
              onViewTerminal={() => console.log("View terminal clicked")}
            />
          ))}
        </div>
      </section>

      {/* Terminal Folders Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-base border-b pb-1 border-gray-500 font-semibold text-gray-500">
            Terminal Folders
          </h2>

          <button className="flex text-[13px] items-center gap-4 text-brand-600  font-semibold transition-colors duration-200 group">
            See all folders
            <div className="border border-brand-600 p-1 rounded-full">
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>
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

export default Dashboard;
