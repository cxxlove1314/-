import React, {Component} from 'react'

import {Link} from 'react-router-dom'


class Shopbox extends Component{

	render(){
		let { img } = this.props.goods.show
		let { title, price, cfav, iid } = this.props.goods
		return(
			<Link className="showbox" to={`detail/iid=${iid}`}>
				<div className="imgbox">
					<img src={ img } alt={title}/>
				</div>
				<div className="textconent">
					<p className="boxtitle">
						{ title }
					</p>
					<p className="godds_info">
						<span className="price_info">{price}</span>
						<span className="fav_num">{cfav}人喜欢</span>
					</p>
				</div>
			</Link>
		)
	}
}

export default Shopbox