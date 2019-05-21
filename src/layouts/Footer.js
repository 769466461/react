import React from 'react'
import {NavLink} from "react-router-dom"
import { Icon } from 'antd';
import "../assets/css/Footer.css"

class Footer extends React.Component{
  render(){
    return <div className="footer">
      {/*<NavLink to="/home">*/}
        <Icon type="home" style={{ fontSize: '32px', color: '#08c' }} onClick={()=>{
          window.location.replace("/home")
        }}/>
      {/*</NavLink>*/}
      <Icon type="camera" style={{ fontSize: '32px', color: '#08c' }}/>
      <Icon type="user" style={{fontSize: '32px'}} onClick={()=>{
        window.location.replace("/user  ")}}
      />
    </div>;
  }
}

export default Footer;