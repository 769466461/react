import React,{Component} from "react";
import '../assets/css/Follow.css';
import {PullToRefresh} from 'antd-mobile';
import Cell from "../components/Cell";
import axios from "axios";
import {action1} from "../store/actions";
import connect from "react-redux/es/connect/connect";

class Follow extends Component {
    state={
        cells:[],
        refreshing:false//下拉标志
    };
    componentDidMount(){this.getData()}



    render() {
        return (
            <div className="Follow">
                <PullToRefresh
                  refreshing={this.state.refreshing}
                  onRefresh={() => {
                      this.setState({ refreshing: true });
                      this.getData()
                  }}
                >
                <Cell cells={this.props.follow} dataName="follow"/>
                </PullToRefresh>

            </div>
        );
    }
    componentDidMount(){
      this.props.get({url: '/mock/follow',params:{_limit:10},typename: 'UPDATE_FOLLOW'});
    }

}

const initMapStateToProps=state=>({
  follow:state.follow,
});

const initMapDispatchToProps=dispatch=>({
  get:({url,params,typename})=>dispatch(action1({
    dispatch,url,params,typename
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Follow)