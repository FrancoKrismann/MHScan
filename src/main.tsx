import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { IconContext } from "react-icons";



const root = ReactDOM.createRoot(
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion, @typescript-eslint/no-non-null-assertion
  document.getElementById("root")! as HTMLElement
);
root.render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: "react-icons" }}>
      <App/>
    </IconContext.Provider>
  </React.StrictMode>
);
