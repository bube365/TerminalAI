import React from "react";
import {
  ArrowRight,
  Plus,
  BookOpen,
  CreditCard,
  //   Zap,
  HelpCircle,
} from "lucide-react";

const ResourcesPanel: React.FC = () => {
  const resources = [
    {
      icon: Plus,
      title: "Add a new note",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: BookOpen,
      title: "Create a study guide",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: CreditCard,
      title: "Generate flashcards",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: HelpCircle,
      title: "Generate mock test questions",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
        <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200 group">
          See all
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>

      <div className="space-y-3">
        {resources.map((resource, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${resource.color}`}
              >
                <resource.icon className="w-4 h-4" />
              </div>
              <span className="font-medium text-gray-900">
                {resource.title}
              </span>
            </div>
            <Plus className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors duration-200" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPanel;
