import  React from 'react'
import ReactDom from 'react-dom'
import App from "./layouts/App"
import store from "./store"
import "antd/dist/antd.css"

import {BrowserRouter,Route,withRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);