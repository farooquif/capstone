import React, { createContext, useContext, useState } from "react";

// This code is derived from Sock Exchange code

// Creating an authentication context
const AuthContext = createContext(null);

// Auth provider component that wraps your app components
export const AuthProvider = ({ children }) => {
  const [id, setId] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_DIRECTORY_API_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setId(data.id);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Network error: ", error);
    }
  };

  const logout = () => {
    setId(null);
  };

  return (
    <AuthContext.Provider value={{ id, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use authentication
export const useAuth = () => useContext(AuthContext);
