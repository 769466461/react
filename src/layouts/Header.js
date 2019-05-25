import React from 'react';
import {NavLink,withRouter} from "react-router-dom";
import { Tabs } from 'antd';
import { Button } from 'antd';
import  '../assets/css/Header.css'


const TabPane = Tabs.TabPane;



class Header extends React.Component{
    render(){
      return (<div className="header">
        <div className="flex">
        <Button type="primary"><NavLink to="/home" >首页</NavLink></Button>
        <Button type="primary"><NavLink to="/follow">关注</NavLink></Button>
        <Button type="primary"><NavLink to="/column">栏目</NavLink></Button>
        </div>




        </div>)
    }
  }

  export default withRouter(Header);