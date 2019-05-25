import React from "react"
import querystring from "query-string"
import axios from "axios";
import { PageHeader } from 'antd';
import getLocalTime from "../components/GetLocalTime"
import "../assets/css/Detail.css"
import connect from "react-redux/es/connect/connect";
import {action1} from "../store/actions";
 class Detail extends  React.Component {

  state={
    time:""
  }

  render() {

    let data = this.props.data;
    let time = this.state.time;
    let _time = getLocalTime(this.state.time/1000)

    return (
       <div className="details">

         {
           data.title &&(
            <div className="detai">
              <PageHeader onBack={() => this.props.history.go(-1)} title={data.detail.auth} subTitle={data.title}/>
              <li className="list list-right-img">
                <div className="left">
                  <div className="new">
                    <p className="title list-ellipsis-1">{data.des}</p>
                    <h3>{data.detail.auth}:{data.title}</h3>
                    <p className="content">{data.detail.content}</p>
                  </div>
                  <span className="time">{_time}</span>
                </div>
                <div className="right">
                  <img src={data.detail.auth_icon}/>
                </div>
              </li>
            </div>


           )
          }


      </div>





    )

  }

  componentDidMount() {
    let id = this.props.match.params.id;
    let dataName = querystring.parse(this.props.location.search).dataName;
    // let res = await axios({url:`/mock/${dataName}/${id}`});
    this.props.get({url: `/mock/${dataName}/${id}`,typename: 'UPDATE_DETAIL'});

  }

}
const initMapStateToProps=state=>({
  data: state.detail
})
const initMapDispatchToProps=dispatch=>({
  get:({url,params,typename})=>dispatch(action1({
    dispatch,url,params,typename
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Detail)
