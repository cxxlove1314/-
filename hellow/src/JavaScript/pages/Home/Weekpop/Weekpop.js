import React, { Component } from 'react'

import './Weekpop.css'

class Weekpop extends Component{
	render(){
		return(
			<div className="week">
				<div className="img">
					<img src="https://s10.mogucdn.com/mlcdn/c45406/171030_6ja2gfl82cl093768ilk7g0fb2fj1_740x543.jpg_800x9999.v1c7E.70.webp" alt="本周流行"/>
				</div>
				<p className="more">
					查看更多  >
				</p>
			</div>
		)
	}
}

export default Weekpop