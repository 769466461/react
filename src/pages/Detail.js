import React from "react"
import querystring from "query-string"
import axios from "axios"
import "../assets/css/Detail.css"

export default class Detail extends  React.Component {

  state={
    data:{},
    time:""
  }

  render() {

    let data = this.state.data;
    let time = this.state.time;
    Date.prototype.Format = function(fmt) {
      var o = {
        "M+" : this.getMonth() + 1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth() + 3) / 3), //季度
        "S" : this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }
    function getLocalTime(nS) {
      return new Date(parseInt(nS) * 1000).Format("yyyy-MM-dd hh:mm:ss");
    }

    // console.log(getLocalTime(1490586664));  //2017-03-27 11:51:04
    let _time = getLocalTime(this.state.time/1000)

    return (

       <div className="details">
        {
          time &&(
            <div className="detai">
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

  async componentDidMount() {
    let id = this.props.match.params.id;
    let dataName = querystring.parse(this.props.location.search).dataName;
    let res = await axios({url:`/mock/${dataName}/${id}`});
    this.setState({data:res.data.page_data,time:res.data.page_data.time })
  }

}

