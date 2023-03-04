import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from 'antd'
import App from "./src/app";
//const root = document.getElementById("root");
//ReactDOM.render(<App />,root);


window.MyWidget = function (idElement, config) {
    const defaultDoms = document.getElementById(idElement) || document.getElementById("presolved-connect-widget")
    const root = ReactDOM.createRoot(defaultDoms);
    root.render(
        <ConfigProvider prefixCls="PCW">
            <App config={config} />
        </ConfigProvider>
    );
    return this;
}

