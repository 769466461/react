import React,{Component} from "react";
import { Spin } from 'antd';
import '../assets/css/Loading.css'

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <Spin tip="Loading...">

        </Spin>
      </div>
    );
  }
}

export default Loading;