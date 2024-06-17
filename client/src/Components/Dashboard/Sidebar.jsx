// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { FaCog, FaHome, FaChartBar, FaUsers } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`w-64 bg-white shadow-md ${
        isOpen ? "block" : "hidden"
      } md:block`}
    >
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">User Name</h2>
        <p className="text-sm text-gray-600">user@example.com</p>
      </div>
      <nav className="flex-1 p-4">
        <Link
          to="/admin/index"
          className="block py-2.5 px-4 rounded hover:bg-gray-200 flex items-center"
        >
          <FaHome className="mr-2" /> Dashboard
        </Link>
        <Link
          to="/analytics"
          className="block py-2.5 px-4 rounded hover:bg-gray-200 flex items-center"
        >
          <FaChartBar className="mr-2" /> Upload Students Credentials
        </Link>
        <Link
          to="/users"
          className="block py-2.5 px-4 rounded hover:bg-gray-200 flex items-center"
        >
          <FaUsers className="mr-2" />
          Upload Supervisors Credentials
        </Link>
        {/* Add more links here */}
      </nav>
      <div className="p-4 border-t">
        <Link
          to="/settings"
          className="block py-2.5 px-4 rounded hover:bg-gray-200 flex items-center"
        >
          <FaCog className="mr-2" /> Link Students To Supervisors
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
