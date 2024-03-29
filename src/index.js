import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
        },
        components: {
          Select: {
            selectorBg: "#f5f5f5",
            optionSelectedBg: "#f5f5f5",
          },
          Table: {
            rowHoverBg: "#f5f5f5",
            rowSelectedBg: "#f5f5f5",
            rowSelectedHoverBg: "#f5f5f5",
          },
          Menu: {
            itemSelectedBg: "#f5f5f5",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
