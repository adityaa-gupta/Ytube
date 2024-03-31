import React from "react";
import {
  FaHome,
  FaFire,
  FaHistory,
  FaVideo,
  FaClock,
  FaThumbsUp,
  FaTrophy,
  FaLightbulb,
  FaListAlt,
  FaCog,
} from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`bg-[#212121] opacity-95  text-white w-64 flex flex-col py-4 px-3 pb-7 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      {/* Menu Items */}
      <ul className="flex flex-col gap-2">
        <SidebarItem icon={<FaHome />} text="Home" />
        <SidebarItem icon={<FaFire />} text="Trending" />
        <SidebarItem icon={<FaHistory />} text="History" />
        <SidebarItem icon={<IoLibrary />} text="Library" />
      </ul>

      {/* Divider */}
      <hr className="border-gray-600 my-4" />

      {/* Sections */}
      <SidebarSection title="Most Viewed Daily" icon={<FaFire />}>
        {/* Placeholder content for Most Viewed Daily */}
        {/* You can replace this with actual content */}
        <SidebarItem text="Video 1" />
      </SidebarSection>

      <SidebarSection title="Idea Achievement" icon={<FaTrophy />}>
        {/* Placeholder content for Idea Achievement */}
        {/* You can replace this with actual content */}
        <SidebarItem text="Idea 1" />
      </SidebarSection>

      {/* Additional Options */}
      <SidebarSection title="More Options" icon={<FaCog />}>
        <SidebarItem icon={<FaVideo />} text="Your videos" />
        <SidebarItem icon={<FaClock />} text="Watch later" />
        <SidebarItem icon={<FaThumbsUp />} text="Liked videos" />
        <SidebarItem icon={<FaLightbulb />} text="Ideas" />
        <SidebarItem icon={<FaListAlt />} text="Playlists" />
      </SidebarSection>
    </div>
  );
}

// Sidebar Section Component
function SidebarSection({ title, icon, children }) {
  return (
    <div>
      {/* Section Header */}
      <div className="flex items-center justify-between text-sm cursor-pointer">
        <span>{title}</span>
        {icon}
      </div>

      {/* Section Content */}
      <ul className="flex flex-col gap-2 mt-2">{children}</ul>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, text }) {
  return (
    <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
      {icon}
      <span>{text}</span>
    </li>
  );
}
