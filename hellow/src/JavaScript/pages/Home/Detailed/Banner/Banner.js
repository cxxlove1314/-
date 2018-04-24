
import React ,{ Component } from 'react'
//import axios from 'axios'

import Swiper from 'swiper' 
import 'swiper/dist/css/swiper.min.css'



let SwiperSlide = (props) => {
    return (
        <div className='content'>
            <div className="swiper-container">
               
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
}


class Banner extends Component {
    render () {
        return (
            <div>
                
            </div>     
           )
    }
      
   




    
}

export default Banner

