import React,{Component} from 'react';
import Swiper from "../components/Swiper";
import Cell from "../components/Cell"
import axios from "axios";
import propTypes from "prop-types"
import "../assets/css/Home.css"
import connect from "react-redux/es/connect/connect";
import {action1} from "../store/actions";


 class Home extends React.Component{
  constructor(props){
    super();
    props.get({url:"/mock/home",params:{_limit:10},typename:"UPDATE_HOME"});
    props.get({url:"/mock/banner",params:{_limit:3},typename:"UPDATE_BANNER"})
  }
/*  state={
     banners:[],
      cells:[],
  };*/



  static contextTypes={
    setLoadingBl:propTypes.func
  }
  render(){
    let {home,banner} = this.props
    return(
      <>
        {/*{this.state.banners && this.state.cells &&(*/}
          <div>
          <Swiper {...this.props} banner={banner} dataName="banner"></Swiper>
          <Cell {...this.props} cells={home} dataName="home"></Cell>
          </div>
        {/*)}*/}

      </>
    )
  }

/*  async componentDidMount(){


      this.context.setLoadingBl(true);
      let resBanner = await axios({url:"/mock/banner",params:{_limit:4}});
      // console.log(resBanner.data.error)
      this.setState({banners:resBanner.data.page_data});

      let resHome = await  axios({url:"/mock/home",params:{_limit:16}});
      // console.log(resHome)
      this.setState({cells:resHome.data.page_data});
      this.context.setLoadingBl(false);

  }*/
}

const initMapStateToProps=state=>({
  home:state.home,
  banner:state.banner,
});

const initMapDispatchToProps=dispatch=>({
  get:({url,params,typename})=>dispatch(action1({
    dispatch,url,params,typename
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Home)