
import React ,{ Component } from 'react'
import axios from 'axios'

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
      //iid=1ls9sfo&_ajax=1&cparam=
   getBannerImg(){
        axios.get('mls/detail/mls/v1/h5?',{
            params:{
                iid:'1ls9sfo' ,
                _ajax:'1',
                cparam:''
            }
        }).then((res)=>{
            console.log(res)
        })
   }

   componentWillMount(){
       this.getBannerImg()
   }


    
}

export default Banner

