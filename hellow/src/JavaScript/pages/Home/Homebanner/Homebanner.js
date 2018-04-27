
import React ,{ Component } from 'react'
import jsonp from 'jsonp'
import Swiper from 'swiper'

import 'swiper/dist/css/swiper.min.css'
import './Homebanner.css'

let BannerItem = (props)=>{
	let { image } = props.item
	return (<div className="swiper-slide">
				<img src={ image } alt="图片"/>
		   </div>)
}

class Homebanner extends Component {
	constructor(props){
		super(props)
		this.state={
			banners:[]
		}
	}
	getbanners(){
		//https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730&callback=jsonp5868_6348_43542_13730
		jsonp('https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730', null, (err, data) => {
		  if (err) {
		    console.error(err.message);
		  } else {
		    this.setState({banners:data.data[43542].list})
		  }
		})
	}
	componentWillMount(){
		this.getbanners()
	}
    render () {
       let { banners } = this.state
       return (
           <div className="swiper-container">
			    <div className="swiper-wrapper">
			        {	

			        	this.state.banners.map( item=>{
			        		return <BannerItem item={item} key={item.acm}/>
			        	})
			        }
			    </div>
			    <div className="swiper-pagination"></div>
				
			</div>

       )
    }
    componentDidUpdate(){
    	new Swiper('.swiper-container', {
			autoplay: true,//可选选项，自动滑动
			loop:true,
			pagination: {
		      el: '.swiper-pagination',
		    },
		})
    }
}


export default Homebanner