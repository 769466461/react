import React from "react";
import {Redirect,Route} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

let AuthRoute =({component:Component,user,...rest})=>(
  <Route {...rest} render={props =>
    // localStorage.getItem("_user") ?
  user.error === 0 || localStorage.getItem("_user")?
      <Component {...props} data={localStorage.getItem("_user")}/>
      : <Redirect to="/login"/>
  }
  />
)

const initMapStateToProps=state=>({
  user:state.user,
});



export default connect(
  initMapStateToProps
)(AuthRoute)