import React, { useContext } from "react";
import DashboardLayout from "../../Components/Dashboard/DashboardLayout";
import { FaUsers, FaChartLine, FaCog, FaFileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <div>
      <DashboardLayout>
        {/* Add your main content here */}
        <div>Welcome to the Students Dashboard</div>

        <div>
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md border-b-4 border-blue-500">
              <div className="flex items-center">
                <FaUsers className="text-3xl text-blue-500 mr-4" />
                <div>
                  <p className="text-2xl font-semibold">1,234</p>
                  <p className="text-gray-600">Total Students</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-b-4 border-green-500">
              <div className="flex items-center">
                <FaChartLine className="text-3xl text-green-500 mr-4" />
                <div>
                  <p className="text-2xl font-semibold">567</p>
                  <p className="text-gray-600">Total Supervisors</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-b-4 border-yellow-500">
              <div className="flex items-center">
                <FaCog className="text-3xl text-yellow-500 mr-4" />
                <div>
                  <p className="text-2xl font-semibold">89</p>
                  <p className="text-gray-600">Total Project Uploaded</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-b-4 border-red-500">
              <div className="flex items-center">
                <FaFileAlt className="text-3xl text-red-500 mr-4" />
                <div>
                  <p className="text-2xl font-semibold">45</p>
                  <p className="text-gray-600">
                    Students and Supervisors Report
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Index;
