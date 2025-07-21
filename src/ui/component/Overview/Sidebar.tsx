import React, { useState } from "react";
import {
  ChevronDown,
  MessageSquare,
  Terminal,
  FolderOpen,
  LayoutDashboard,
  LogOut,
  Wifi,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import TerminalLogo from "../../assets/Termin.al.svg";
import { HiOutlineBriefcase, HiMiniChevronUpDown } from "react-icons/hi2";
import { RiWifiOffLine } from "react-icons/ri";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/" },
    { icon: MessageSquare, label: "Chat", path: "/chat" },
    { icon: Terminal, label: "Terminals", path: "/terminals" },
    { icon: FolderOpen, label: "Folders", path: "/folders" },
  ];

  const [isOnline, setIsOnline] = useState(true);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:z-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <img src={TerminalLogo} alt="" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-8 pt-4 gap-4">
            {navigationItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.label}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 py-1 text-sm px-3 text-left transition-colors duration-200 ${
                    isActive
                      ? " text-brand-600 font-semibold  border-r-[3px] border-brand-600"
                      : "text-[#A4A7AE]  hover:text-gray-900"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
            {/* Expertise Selector */}
            <div className="p-4 border-y border-gray-200 ">
              <div className="w-full bg-transparent flex  justify-between  rounded-lg ">
                <div className="flex gap-2 items-start">
                  <HiOutlineBriefcase className="w-4 h-4 text-gray-400" />
                  <div className="text-sm  text-[#A4A7AE]">
                    Select Expertise
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-xs font-semibold mt-2 text-[#535862]">
                Current expertise: General
              </div>
            </div>
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-gray-200 space-y-8">
            <div className="flex items-center gap-3">
              <div className="px-2 border font-semibold text-brand-600 border-brand-600 rounded-full">
                J
              </div>
              <span className="text-sm font-semibold text-brand-600">
                John's Workspace
              </span>

              <HiMiniChevronUpDown className="text-2xl ml-6 font-bold text-brand-600" />
            </div>

            {/* <div className="flex items-center gap-3 text-sm text-gray-600">
              <Wifi className="w-4 h-4" />
              <span className="text-sm font-semibold text-brand-600">
                {" "}
                Online
              </span>
            </div> */}

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`flex relative  px-5 py-2 rounded-full transition-colors duration-300 ${
                  isOnline ? "bg-brand-600" : "bg-gray-400"
                }`}
              >
                <div
                  className={`px-1 py-1 absolute top-[1px] bottom-[1px] rounded-full flex items-center justify-center ${
                    isOnline ? "bg-white left-1" : "bg-white right-1"
                  }`}
                >
                  {isOnline ? (
                    <Wifi className="w-2 h-2 text-brand-600 font-bold" />
                  ) : (
                    <RiWifiOffLine className="w-2 h-2 text-brand-600 font-bold" />
                  )}
                </div>
              </button>
              <span
                className={`text-sm font-semibold ${
                  isOnline ? "text-brand-600" : "text-gray-500"
                }`}
              >
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>

            <button className="font-semibold text-brand-600 flex items-center gap-3 text-sm  ">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
