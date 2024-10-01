import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import Menu from "./Menu"; // Change to import Menu
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu /> {/* Change App to Menu */}
    </BrowserRouter>
  </React.StrictMode>
);
