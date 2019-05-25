import React from 'react';
import "../assets/css/Login.css"
import {NavLink} from "react-router-dom";
import { Button } from 'antd';
import axios from "axios";
import connect from "react-redux/es/connect/connect";
import {action1,action2} from "../store/actions";

class Login extends React.Component{
  state={
    username:"",
    password:"",
    bl:false

  }
  changeIpt = (ev)=>{
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }

  submit = async ()=>{
   /* let res = await axios({
    url:"/api/login",
    params:{
      username:this.state.username,
      password:this.state.password,
      bl:false
    }
  });
    if(res.data.error===0){
      localStorage.setItem('_user',this.state.username);
      this.props.history.push("/user")
    }else{
      this.setState({
        bl:true
      })
    }*/
   this.props.get({
     url:"/api/login",
     params:{
       username:this.state.username,
       password:this.state.password,
     },
     typename:"UPDATE_USER"
   }).then(
     error=>{
       if(error===0){
         localStorage.setItem('_user',this.state.username);
         this.props.history.push("/user")
       }else{
         this.setState({
           bl:true
         })
       }
     }
   )
}
  render(){

    return(
      <div className="Login">
              <div className="title" >

                      <span >首页</span>

                  <span >账号密码登录</span>

              </div>

              <div className="title-msg">
                  <span>请输入登录账户和密码</span>
              </div>

              <form className="login-form" method="post" noValidate>
                  <div className="input-content">
                      <div>
                          <input type="text" autoComplete="off" name="username"
                                 placeholder="用户名"  required
                                 value={this.state.username} onChange={this.changeIpt}
                          />
                      </div>

                      <div >
                          <input type="password" name="password" value={this.state.password} onChange={this.changeIpt}
                                 autoComplete="off" placeholder="登录密码"  required maxLength="32"/>
                      </div>
                  </div>

                  <div >
                    {
                      this.state.bl?(<h3 style={{color:"#f00",textAlign:"center"}}>用户名或密码错误</h3>)
                        :null
                    }

                    <Button type="primary" style={{margin:"0 auto",display:"block"}} onClick={this.submit}>登录</Button>
                  </div>

                  <div className="foor">
                      <div className="left"><span>忘记密码 ?</span></div>
                      <router-link
                          to="/register">

                          <div className="right"><NavLink to="/reg"><span>去注册</span></NavLink></div>
                      </router-link>
                  </div>
              </form>

      </div>
    )
  }
}

const initMapStateToProps=state=>({
  user: state.user
});

const initMapDispatchToProps=dispatch=>({
  get:({url,params,typename})=>dispatch(action2({
    url,params,typename
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Login)