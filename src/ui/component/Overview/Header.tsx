import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import Avatar from "../../assets/terminalAvatar.svg";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        {/* Welcome message */}
        <div className="flex-1 lg:flex-none">
          <h1 className="text-xl lg:text-lg font-bold text-gray-600">
            Welcome Back, John 👋
          </h1>
        </div>

        {/* Search and profile */}
        <div className="flex items-center gap-4 ">
          <div className="relative hidden sm:block bg-white">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="pl-10 pr-4 py-2 w-64 text-sm bg-white lg:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-3">
            <img src={Avatar} alt="" />

            <div className="">
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`flex relative  px-5 py-[9px] rounded-full transition-colors duration-300 ${
                  isOnline
                    ? "bg-gradient-to-r from-green-400 to-blue-500 "
                    : "bg-gray-400"
                }`}
              >
                <div
                  className={`px-2 py-1 absolute top-[1px] bottom-[1px] rounded-full flex items-center justify-center ${
                    isOnline ? "bg-[#FFBD3E] right-1 " : "bg-white left-1"
                  }`}
                ></div>
              </button>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
