"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaUser, FaUsers, FaProjectDiagram, FaChartBar, FaBell, FaQuestionCircle, FaChevronRight, FaChevronLeft } from "react-icons/fa"; // Import icons
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation

interface SidebarItem {
  name: string;
  path: string;
  data: string[];
  icon: React.ReactNode;
}

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const menuData = useSelector((state: RootState) => state.menu.menuItems);  // Access menuData from Redux store
  const pathname = usePathname(); // Get current path using usePathname from next/navigation

  // Map of icons corresponding to menu item names
  const iconMap: { [key: string]: React.ReactNode } = {
    Dashboard: <FaHome />,
    "User Management": <FaUser />,
    "Role Management": <FaUsers />,
    "System Settings": <FaProjectDiagram />,
    Reports: <FaChartBar />,
    Notifications: <FaBell />,
    Help: <FaQuestionCircle />,
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`w-${isCollapsed ? "40" : "96"} bg-gray-800 text-white h-screen p-4 transition-all duration-300`}>
        <div className="flex justify-end items-center mb-6">
          <button
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="text-white focus:outline-none"
          >
            {/* Toggle icon based on collapsed state */}
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>
        <ul>
          {menuData.map((item, index) => {
            const isActive = pathname === item.path; // Check if the current path matches the item's path
            return (
              <li key={index} className="mb-4">
                <Link
                  href={item.path}
                  className={`flex items-center space-x-3 text-lg font-semibold ${isActive ? "text-indigo-500" : "text-gray-200"} hover:text-indigo-500`}
                >
                  <span className="text-xl">{iconMap[item.name] || <FaQuestionCircle />}</span>
                  <span className={`whitespace-nowrap ${isCollapsed ? "hidden" : ""}`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main content area (children will be rendered here) */}
      <div className="flex-1">
        {children} {/* This renders the children passed into the Sidebar */}
      </div>
    </div>
  );
};

export default Sidebar;
