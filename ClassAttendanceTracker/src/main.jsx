import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext"; // Importing the AuthProvider context for user authentication

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Providing the AuthProvider context to the App component and its child components */}
    <AuthProvider>
      {/* Rendering the main App component inside the AuthProvider context */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);

export default React;
