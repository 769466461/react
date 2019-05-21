import React from 'react';
import { Carousel } from 'antd';
import "../assets/css/Swiper.css"
import {Link} from 'react-router-dom'

class Swiper extends React.Component{


    render(){
        let {banner,dataName} = this.props
        return <div className="swiper">
            <Carousel autoplay style={{height:"100%"}}>
                {banner.map(item=>(
                    <Link
                      key={item.id}
                      to={{
                          pathname:"/detail/" + item.id,
                          search:"?dataName=" + dataName
                      }}

                    >
                        <img src={item.banner}/>
                        <h3 style={{position:"relative",zIndex:2,top:"-120px"}}>{item.title}</h3>
                    </Link>
                ))}
            </Carousel>
        </div>;
    }
}

export default Swiper;