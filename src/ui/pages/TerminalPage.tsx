import React from "react";
import TerminalCard from "../component/Overview/TerminalCard.tsx";

const TerminalPage: React.FC = () => {
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

  return (
    <main className="flex-1 p-4 lg:p-8 bg-gray-50 overflow-y-auto">
      {/* Generated Terminals Section */}
      <section className="mb-8">
        <h2 className="text-base w-fit  border-b pb-1 border-gray-500 font-semibold text-gray-500">
          Generated Terminals
        </h2>

        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </main>
  );
};

export default TerminalPage;
