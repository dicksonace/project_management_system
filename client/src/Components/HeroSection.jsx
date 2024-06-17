import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Student Project Management System
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl text-gray-300">
            Empowering students to innovate, collaborate, and excel through
            their final year projects.
          </p>
          <div className="mt-10 max-w-md mx-auto flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              Login
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              View Projects
            </button>
          </div>
          <div className="mt-12">
            <p className="text-center text-gray-300 text-lg">
              <span className="italic font-medium">
                "Unlocking the potential of future innovators, one project at a
                time."
              </span>
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-white">
                Upload and Approve
              </h3>
              <p className="mt-2 text-base text-gray-300">
                Students can easily upload their final year projects and have
                them reviewed and approved by supervisors.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-white">
                Search and Explore
              </h3>
              <p className="mt-2 text-base text-gray-300">
                Supervisors and students alike can explore a diverse range of
                projects, fostering collaboration and learning.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium text-white">
                Knowledge Sharing
              </h3>
              <p className="mt-2 text-base text-gray-300">
                Access a repository of projects to gain insights, inspire
                creativity, and drive innovation across disciplines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
