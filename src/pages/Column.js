import React from 'react';
import axios from "axios"
import Cell from "../components/Cell"
import style from "../assets/css/Column.module.css"

export default class Column extends React.Component{
  state={
    cells:[]
  }
    render(){
        return(
            <div className={style.Column}>
              <Cell {...this.props} cells={this.state.cells} dataName="home"></Cell>
            </div>
        )
    }

  async componentDidMount(){

    let resHome = await  axios({url:"/mock/home",params:{_limit:10}});

    this.setState({cells:resHome.data.page_data})

  }
}