import React,{Component} from "react";
import "../assets/css/App.css";
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Follow from "../pages/Follow"
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import Loading from "../components/Loading"
import AuthRoute from "../guard/Auth";
import propTypes from "prop-types";
import Mask from "../components/Mask"
import "../assets/css/base.css";
import connect from "react-redux/es/connect/connect";
import action1 from "../store/actions"





class App extends Component {


  setLoadingBl = (bl)=>{this.setState({loadingBl:bl})}

  static childContextTypes={
    setLoadingBl:propTypes.func
  }

  checkRoute = (path)=>{
    let {viewHeader,viewFooter}=this.props;
    if(/home|follow|column/.test(path)){
      viewHeader(true);viewFooter(true)
    }

    if(/login|reg|detail/.test(path)){
      viewHeader(false);viewFooter(false)
    }

      if (/user/.test(path)){
      viewHeader(false);viewFooter(true);
    }
  }
  // 在初始化render的时候不会执行，它会在Component接受到新的状态(Props)时被触发
  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname;
    this.checkRoute(path);
    if(this.props.location !== nextProps.location){//当前地址不等于目标地址
      window.scrollTo(0,0);//滚动到顶部
    }
  }

  componentDidMount() {
    let path = this.props.location.pathname;
    this.checkRoute(path);
  }





  render(){
    let {bHeader,bLoading,bFooter} = this.props
    return (
      <>
        {bLoading && <Loading/>}
        {bHeader && <Header/>}
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/follow" component={Follow}/>
          <Route path="/column" component={Column}/>
          <AuthRoute path="/user" component={User}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/detail/:id" component={Detail}/>
          <Redirect exact from="/" to="/home"/>
          <Route component={Error}/>
        </Switch>

        {bLoading && <Mask/>}
      {bFooter&& <Footer {...this.props}/>}
      </>
  )
  }

  getChildContext(){
    return{
      setLoadingBl:this.setLoadingBl
    }
  }

}
const initMapStateToProps=state=>({
  bHeader:state.bHeader,
  bFooter:state.bFooter,
  bLoading:state.bLoading
});
const initMapDispatchToProps=dispatch=>({
  viewHeader:(bl)=>dispatch({type:"VIEW_HEADER",payload:bl}),
  viewFooter:(bl)=>dispatch({type:'VIEW_FOOTER',payload:bl}),
  viewLoading:(bl)=>dispatch({type:"VIEW_Loading",payload:bl})
})

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App)