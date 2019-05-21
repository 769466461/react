import React from "react";
import {Redirect,Route} from "react-router-dom";

let AuthRoute =({component:Component,...rest})=>(
  <Route {...rest} render={props =>
    localStorage.getItem("_user") ?
      <Component {...props} data={localStorage.getItem("_user")}/>
      : <Redirect to="/login"/>
  }
  />
)

export default AuthRoute