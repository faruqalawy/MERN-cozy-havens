import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      axios.get("http://localhost:5000/currentUser")
        .then(response => {
          if (response.data.user) {
            setCurrentUser(response.data.user);
            localStorage.setItem("currentUser", JSON.stringify(response.data.user));
          }
        })
        .catch(error => {
          console.error("Failed to fetch current user", error);
        });
    }
  }, [currentUser]);

  const login = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:5000/login", { username, password });
      setCurrentUser(response.data.user);
      localStorage.setItem("currentUser", JSON.stringify(response.data.user));
      setSuccessMessage(response.data.message); // Set flash message
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message); // Set flash message on error
      console.log("Login failed: " + error.message);
    }
  };

  const register = async (username, email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/register", { username, email, password });
      setCurrentUser(response.data.user);
      localStorage.setItem("currentUser", JSON.stringify(response.data.user));
      setSuccessMessage(response.data.message); // Set flash message
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message); // Set flash message on error
      console.log("Registration failed: " + error.message);
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/logout");
      setCurrentUser(null);
      localStorage.removeItem("currentUser");
      setSuccessMessage(response.data.message); // Set flash message
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response.data.message); // Set flash message on error
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout, successMessage, errorMessage }}>
      {children}
    </AuthContext.Provider>
  );
};
