import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { StandardProvider } from "./Components/contexts/StandardContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StandardProvider>
      <App />
    </StandardProvider>
  </StrictMode>
);
