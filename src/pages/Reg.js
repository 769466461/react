import React from 'react';
import {NavLink, Prompt} from "react-router-dom"
import "../assets/css/Reg.css"
import { Button } from 'antd';
import axios from "axios";

export default class Reg extends React.Component{
  state={
    username:"",
    password:"",
    successbl:false,
    errorbl:false

  }
  changeIpt = (ev)=>{
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }

  submit = async()=>{
    let params = new URLSearchParams();
    params.append("username",this.state.username)
    params.append("password",this.state.password)
    let res = await  axios({
      url:"/api/reg",
      method:"post",
      data:params
    });
    let error = res.data.error;

    // console.log(res)
    if(error == 0){
      // console.log("success")
      this.setState({
        successbl:true,
        errorbl:false,
        password:"",
      })

    }
    if(error == 1){
      // console.log("error")
      this.setState({
        errorbl:true,
        successbl:false,
        password:"",
      })
    }

  }

  render(){
    return(
      <div className="Reg">
          <div className="title">

                  <span style={{color:"#99f"}}>首页</span>
              <span style={{marginLeft:"5rem"}}>注册新用户</span>
          </div>
          <form className="login-form" method="post" noValidate>
              <div className="input-content">
                  <div>
                      <input type="text" autoComplete="off" value={this.state.username}
                             onChange={this.changeIpt} placeholder="用户名" name="username" required/>
                  </div>

                  <div >
                      <input type="password" value={this.state.password} onChange={this.changeIpt}
                             autoComplete="off" placeholder="密码" name="password" required maxLength="32"/>
                  </div>
              </div>

              <div >
                <Button type="primary" style={{margin:"0 auto",display:"block"}} onClick={this.submit}>注册</Button>
                {
                  this.state.successbl?(<h3 style={{color:"#9f9",textAlign:"center"}}>注册成功
                      <NavLink to="/login"><span style={{color:"#99f"}}>去登录</span></NavLink>
                  </h3>)
                    :null
                }
                {
                  this.state.errorbl?(<h3 style={{color:"#f00",textAlign:"center"}}>用户名已存在</h3>)
                    :null
                }
              </div>

              <div className="foor">
                  <div className="left"><span>已有账号 ?</span></div>

                      <div className="right">
                          <NavLink to="/login"><span style={{color:"#99f"}}>去登录</span></NavLink>
                      </div>
              </div>
          </form>

        <Prompt when={true}
        message={location=>{return `未保存,是否去向${location.pathname}`}}
        />
      </div>
    )
  }
}