import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Ca from "./Ca";
import Donut from "./Donut";
import Tableau from "./Tableau";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <Ca />
        <Donut />
        <Tableau />
    </React.StrictMode>
);
