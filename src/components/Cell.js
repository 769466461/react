import React,{Component} from "react";
import '../assets/css/Cell.css'

import {Link} from 'react-router-dom'

class Cell extends Component {

    render() {
        let {cells,dataName} = this.props
        return (

            <div className="cell">

                {
                cells.map((item,index)=>(
                    <Link
                        key={item.id}
                        to={{
                            pathname:"/detail/" + item.id,
                            search:"?dataName=" + dataName
                        }}
                        className="aa"
                    >
                        <h3 >{item.id}{item.title}</h3>
                        <span>{item.des}</span>
                    </Link>
                ))
            }

            </div>
        );
    }
}

export default Cell;