

import React ,{ Component } from "react" 
import Swiper from 'swiper' 
import '../../../../../../node_modules/swiper/dist/css/swiper.min.css'

import './Recommend.css'
import jsonp from "jsonp"

let SwiperList = (props) => {
    console.log(props)
        let { image,discountPrice } = props.image
        return (
            <div className="swiper-slide c">
                <img  className="imgs" src={image} alt=""/>
               <p className="Price"> ￥{ discountPrice } </p>
            </div>
        )
    }



class Recommend extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: null
        }
    }

    getBanners () {
        jsonp('http://mce.mogucdn.com/jsonp/recommend/4?pid=6011&iidE=1lyhquo&_=1524711223962', null, (err, data) => {
		  if (err) {
		        console.error(err.message);
		  } else {
            this.setState({list : data.data.list})
		  }
		})
    }

    componentWillMount (){
        this.getBanners()
    }

    renderSwiper(){
        if( this.state.list ){
            let { list } = this.state
           return    list.map(( item , i )=> {
                        return <SwiperList  key={i}  image={item }  />
                    })
            }
            return "" ;

    }

    componentDidUpdate(){
        new Swiper('.a', {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 10,
          })
    }

    render(){
        return (
            <div className="S_box"> 
                <div className="recommend-head">为你推荐</div>
                <div className="swiper-container a">
                    <div className="swiper-wrapper b">
                        {
                            this.renderSwiper()
                        }
                    </div>
                </div>


            </div>
        )
    }

}

export default Recommend