
import React ,{ Component } from 'react'
import axios from 'axios'

let bannerItem = (prop)=>{
	return <div className="swiper-slide">Slide 1</div>
}

class Homebanner extends Component {
	getbanners(){
		//this.setState({banners:})
		axios.get("")
	}
    render () {
       return (
           <div className="swiper-container">
			    <div className="swiper-wrapper">
			        
			    </div>
			    <div className="swiper-pagination"></div>
			</div>

       )
    }
}

Homebanner.state={
	banners:[]
}

export default Homebanner