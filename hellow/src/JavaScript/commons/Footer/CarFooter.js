


import React, { Component } from "react"
import "./CarFooter.css"


class CarFooter extends Component {
    render() {
        return (
            <div className="CarFooter">
                <div className="footbar-im" >
                    <i className="fa fa-child"></i>
                    <span className="text">客服</span>
                </div>
                <div className="footbar-shop" >
                    <i className="fa fa-shopping-basket" ></i>
                    <span className="text" >店铺</span>
                </div>
                <div className="footbar-fav" >
                    <i className="fa fa-heart-o"></i>
                    <span className="text">收藏</span>
                </div>
                <div className="footbar-buy">
                    <span className="buy-cart">加入购物车</span>
                    <span className="buy-now">购买</span>
                </div>
            </div>
        )
    }
}

export default CarFooter