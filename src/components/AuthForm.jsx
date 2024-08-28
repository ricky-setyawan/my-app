import React, { useState } from "react";
import axios from "axios";
import logo from "../images/logo.png"; // Ensure the path is correct

const AuthForm = ({ closeForm, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(""); // For registration
  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Reset error message at the start

    try {
      const endpoint = isLogin
        ? "https://beta-api.tecosys.ai/user/login/" // Login endpoint
        : "https://beta-api.tecosys.ai/user/register/"; // Register endpoint

      const data = isLogin
        ? { email, password } // Login payload
        : { email, password, full_name: fullName }; // Register payload

      const response = await axios.post(endpoint, data);

      if (response.status === 200 || response.status === 201) {
        // Check for successful response status
        const accessToken = response.data.access;
        onLoginSuccess(accessToken); // Pass the token back to the parent
        console.log(
          isLogin ? "Login successful" : "Registration successful",
          response.data
        );
        setErrorMessage(""); // Clear any error message on success
        closeForm(); // Close the form after successful login or registration
      } else {
        console.error(
          isLogin ? "Login failed" : "Registration Failed",
          response.data
        );
        setErrorMessage(
          response.data.message || "An error occurred during registration."
        );
      }
    } catch (error) {
      if (error.response) {
        console.error(
          isLogin ? "Login failed" : "Registration failed",
          error.response.data
        );
        const e = error.response.data.email
          ? error.response.data.email.toString()
          : "";
        const i = error.response.data.non_field_errors
          ? error.response.data.non_field_errors.toString()
          : "";
        console.log(e);
        // console.log(i);
        // console.log(error.response.data);
        // Handle specific error messages
        if (isLogin && i === "Invalid credentials") {
          setErrorMessage("User not found or Credentials are not valid.");
        } else if (!isLogin && e === "A user with this email already exists.") {
          setErrorMessage("Email already registered. Please log in.");
        } else {
          setErrorMessage("An error occurred during registration."); // Set error message
        }
      } else if (error.request) {
        console.error("No response received", error.request);
        setErrorMessage("No response received. Please try again.");
      } else {
        console.error("Error during request", error.message);
        setErrorMessage("Error during request: " + error.message);
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="bg-[#252525] text-white p-8 rounded-lg w-[400px] text-center shadow-lg z-60">
      <div className="flex justify-between mb-5">
        <button
          className={`flex-1 p-3 rounded-lg text-lg mx-1 ${
            isLogin ? "bg-white text-black" : "bg-gray-700 text-white"
          }`}
          onClick={() => setIsLogin(true)}
          disabled={loading} // Disable button while loading
        >
          Login
        </button>
        <button
          className={`flex-1 p-3 rounded-lg text-lg mx-1 ${
            !isLogin ? "bg-white text-black" : "bg-gray-700 text-white"
          }`}
          onClick={() => setIsLogin(false)}
          disabled={loading} // Disable button while loading
        >
          SignUp
        </button>
      </div>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-3 mb-4 rounded-md border border-gray-700 bg-[#252525] text-white placeholder-gray-400"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 mb-4 rounded-md border border-gray-700 bg-[#252525] text-white placeholder-gray-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 mb-4 rounded-md border border-gray-700 bg-[#252525] text-white placeholder-gray-400"
          required
        />
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}{" "}
        {/* Display error message */}
        <button
          type="submit"
          className={`p-3 rounded-md bg-[#3d3c3c] text-white cursor-pointer text-lg hover:bg-gray-500 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Processing..." : isLogin ? "Login" : "Join Now"}
        </button>
      </form>

      <p className="my-4 text-gray-400">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span
          className="text-blue-500 cursor-pointer ml-1"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? " Sign Up" : " Login"}
        </span>
      </p>

      <div className="flex flex-col items-center">
        <button className="mt-4 p-3 rounded-md bg-white text-black flex items-center justify-center cursor-pointer hover:bg-gray-300 w-full">
          <img src={logo} alt="Google logo" className="w-5 mr-2" />
          Continue with Google
        </button>

        <button
          className="mt-4 p-3 rounded-md bg-red-600 text-white flex items-center justify-center cursor-pointer hover:bg-red-500 w-full"
          onClick={closeForm}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
