import React, { Component } from 'react'
import jsonp from 'jsonp'

import Shopbox from './Shopbox/Shopbox'

import './Shopshow.css'

class Shopshow extends Component{
	constructor(props){
		super(props)
		this.state={
			goods:[]
		}
	}

	getgoods(){
		jsonp('http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=365e29f9-6676-4806-be06-2d060f4321d0&sort=pop&_=1524722583082', null, (err, data) => {
		  if (err) {
		    console.error(err.message);
		  } else {
		    this.setState({goods:data.data.list})
		  }
		})
	}

	componentWillMount(){
		this.getgoods()
	}

	render(){
		let { goods } = this.state
		console.log( goods )
		return(
			<div className="shopshow">
				<ul className="shoptitle">
					<li>流行</li>
					<li>新款</li>
					<li>精选</li>
				</ul>
				<div className="showconent">
					{
						goods.map( (item,i)=>{
							return <Shopbox goods={item} key={i}/>
						})
					}
				</div>
			</div>
		)
	}
}

 export default Shopshow
//http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=365e29f9-6676-4806-be06-2d060f4321d0&sort=pop&_=1524722583082&callback=jsonp4