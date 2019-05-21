import  React from 'react'
import ReactDom from 'react-dom'
import App from "./layouts/App"
import "antd/dist/antd.css"
import {BrowserRouter} from "react-router-dom";

ReactDom.render(
   <BrowserRouter>
     <App></App>
   </BrowserRouter>,
  document.getElementById("root")
);