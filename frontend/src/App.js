import React from "react";
import "./assets/scss/style.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "pages/LandingPages";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";

import { AuthProvider } from "context/AuthContext";
import ProtectedRoute from "pages/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <LandingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/properties/:propertyName"
              element={
                <ProtectedRoute>
                  <DetailsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
