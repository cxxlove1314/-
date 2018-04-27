
import React ,{ Component } from 'react'
import './banner.css'
import Swiper from 'swiper' 
import '../../../../../../node_modules/swiper/dist/css/swiper.min.css'
let SwiperSlide = (props) => {
    return (
        <div className="swiper-slide">
            <img className='topimg' src={`${props.imgs}`} alt=""/>
        </div>
    )
}


class Banner extends Component {
    render () {
       
        let {bannerImgs} = this.props 
        return (

            <div className="swiper-container">
                <div className="swiper-wrapper">
                     
                         {
                            bannerImgs.map((item,i)=>{
                                    return <SwiperSlide  key={i} imgs={item} />
                            }) 
                        } 
                  
                </div>
            </div>

           )
    }
    
    componentDidMount(){
        new Swiper(".swiper-container", {pagination: {el: '.swiper-pagination'}})
    }



  
}



export default Banner

