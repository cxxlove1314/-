import React, { Component } from 'react'
import jsonp from 'jsonp'

import './Data.css'

const NavItem = prop=>{
	let { image, title } = prop.item
	return(
		<div className="navItem">
			<img src={image} alt="图片"/>
			<p>{title}</p>
		</div>
	)
}

class Date extends Component{
	constructor(props){
		super(props)
		this.state={
			navs:[]
		}
	}
	getnavs(){
		//https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730&callback=jsonp5868_6348_43542_13730
		jsonp('https://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C43542%2C13730', null, (err, data) => {
		  if (err) {
		    console.error(err.message);
		  } else {
		    this.setState({navs:data.data[13730].list})
		  }
		})
	}
	componentWillMount(){
		this.getnavs()
	}
	render(){
		let{ navs } = this.state
		return(
			<div className="data">
				{
					navs.map( item=>{
						return <NavItem key={item.sort} item={item}/>
					})
				}
			</div>
		)
	}
}

export default Date