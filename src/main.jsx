import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import LoadingBars from "./components/common/LoadingBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingBars>
        <App />
      </LoadingBars>
    </BrowserRouter>
  </StrictMode>
);
