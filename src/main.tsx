import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { ValueProvider } from "./components/contextPractice/ValueContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ValueProvider>
      <App />
    </ValueProvider>
  </StrictMode>
);
