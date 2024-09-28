import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const shincodeInfo = {
  name: "shincode",
  age: 24,
};

const ShincodeContext = createContext(shincodeInfo);

createRoot(document.getElementById("root")).render(
  <ShincodeContext.Provider value={shincodeInfo}>
    <StrictMode>
      <App />
    </StrictMode>
  </ShincodeContext.Provider>
);

export default ShincodeContext;