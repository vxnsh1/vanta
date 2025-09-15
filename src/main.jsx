import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import LoadingBars from "./components/common/LoadingBar.jsx";
import Context from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingBars>
        <Context>
          <App />
        </Context>
      </LoadingBars>
    </BrowserRouter>
  </StrictMode>
);
