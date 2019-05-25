import React from 'react';
import Cell from "../components/Cell"
import {PullToRefresh} from 'antd-mobile';
import style from "../assets/css/Column.module.css"
import {action1} from "../store/actions";
import connect from "react-redux/es/connect/connect";

 class Column extends React.Component{
  state={
    refreshing:false
  }


    render(){
        return(
            <div className={style.Column}>
              <PullToRefresh
                direction="up"
                refreshing={this.state.refreshing}
                onRefresh={() => {
                  this.setState({ refreshing: true });
                  this.getData()
                }}
              >
              <Cell {...this.props} cells={this.props.column} dataName="home"></Cell>
              </PullToRefresh>

            </div>
        )
    }
   componentDidMount(){
     this.props.get({url: '/mock/column',params:{_limit:10},typename: 'UPDATE_COLUMN'});
   }


}
const initMapStateToProps=state=>({
  column:state.column,
});

const initMapDispatchToProps=dispatch=>({
  get:({url,params,typename})=>dispatch(action1({
    dispatch,url,params,typename
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Column)