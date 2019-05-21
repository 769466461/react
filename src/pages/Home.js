import React from 'react';
import Swiper from "../components/Swiper";
import Cell from "../components/Cell"
import axios from "axios";
import "../assets/css/Home.css"
export default class Home extends React.Component{

  state={
     banners:[],
      cells:[],
  };
  render(){
    return(
      <div className="Home">
        {this.state.banners && this.state.cells &&(
          <div>
          <Swiper {...this.props} banner={this.state.banners} dataName="banner"></Swiper>
          <Cell {...this.props} cells={this.state.cells} dataName="home"></Cell>
          </div>
        )}

      </div>
    )
  }

  async componentDidMount(){
      let resBanner = await axios({url:"/mock/banner",params:{_limit:4}});
      // console.log(resBanner.data.error)
      this.setState({banners:resBanner.data.page_data});

      let resHome = await  axios({url:"/mock/home",params:{_limit:10}});
      console.log(resHome)
      this.setState({cells:resHome.data.page_data})

  }
}