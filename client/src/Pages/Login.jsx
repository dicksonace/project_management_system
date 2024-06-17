import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://example.com/api/login", // Replace with your API endpoint
        { username, password }
      );

      console.log("Login successful:", response.data);
      // Optionally, you can redirect the user or perform other actions upon successful login
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
