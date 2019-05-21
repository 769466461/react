import React from 'react';
import "../assets/css/User.css"
import {NavLink, Prompt} from "react-router-dom"

export default class User extends React.Component{


  render(){
    let username = this.props.data
    console.log(this.props.data)
    return(
      <div className="User">
        <h3>User</h3>
          <h3>User</h3>
          <h3>User</h3>
          <h3>User</h3>
        <div>用户{username}</div>

        <header>
          <p>个人中心</p>
        </header>
        <div className="content">

          <div className="detail">
            <img src={require("../assets/img/timg.jpg")}/>
              <ul className="block">
                <li>姓名：{username}</li>
                <li>性别：男</li>
                <li>手机：17343997065</li>
                <li>学校：</li>
                <li>个人简介：这个地方文字超出范围之外会自动把容器div撑开，注意不是中文字符的话
                  需要加CCS属性word-wrap:break-word，这是CCS3的属性。
                </li>
              </ul>
          </div>



          <div className="loginOut">
            <NavLink
              onClick={()=>{
                localStorage.removeItem("_user")
              }}
              style={{color:"#99f"}}
              to="/home"
            >注销登录</NavLink>
          </div>
        </div>







      </div>



    )
  }
}