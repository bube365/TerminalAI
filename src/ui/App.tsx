import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { OverviewPage } from "./pages/OverviewPage";
import Sidebar from "./component/Overview/Sidebar";
import ChatPage from "./pages/ChatPage";
import Header from "./component/Overview/Header";
import TerminalPage from "./pages/TerminalPage";
import FoldersPage from "./pages/FoldersPage";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <div className="flex-1 flex flex-col w-full overflow-hidden lg:ml-0">
        <Header onMenuClick={toggleSidebar} />
        <Routes>
          <Route index element={<OverviewPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/terminals" element={<TerminalPage />} />
          <Route path="/folders" element={<FoldersPage />} />
        </Routes>
      </div>
    </div>
  );
}
