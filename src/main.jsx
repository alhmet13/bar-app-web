import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import AnaSayfa from "./pages/AnaSayfa.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnaSayfa />
  </StrictMode>,
);
