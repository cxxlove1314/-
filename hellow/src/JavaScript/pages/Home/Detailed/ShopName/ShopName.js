
import React, { Component } from "react"
import "./ShopName.css"
import Recommend from "../Recommend/Recommend"

class ShopName extends Component {
    constructor(props) {
        super(props)
        this.changePlus = this.changePlus.bind(this)
        this.state = {
            plus: false
        }
    }

    render() {
        console.log(this.props)
        let { score,name ,allGoodsUrl,shopLogo} = this.props.shopInfo

        return (
           <div> 
            <div className="ShopBox">
                <div className="clearfix">
                    <a className="info-avatar" href={allGoodsUrl}>
                        <img src={shopLogo} alt="" />
                    </a>
                    <div className="flex shop-info-container">

                        <p className="title_name"> {name}  </p>

                        <div onClick={this.changePlus} className="shop-collect ">

                            {
                                this.state.plus ? <span className="plus">已收藏</span> : <span className="plus">+收藏</span>
                            }

                        </div>
                    </div>
                </div>
                <div className="info-content">
                    <div className="count">
                        <div className="sale">
                            <span className="fz-18">14.3万</span>
                            <br />总销量
                        </div>

                        <div className="all">
                            <span className="fz-18">162</span>
                            <br />全部宝贝
                        </div>
                    </div>

                    <div className="shop-evaluate">
                        <ul>
                            {
                                score.map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <span>{item.name}</span>
                                            <em style={item.isBetter ? { color: "#f13e3a" } : { color: "#5ea732" }} >{item.score}</em>
                                            <i style={item.isBetter ? { background: "#f13e3a" } : { background: "#5ea732" }}>
                                                {item.isBetter ? "高" : "低"}
                                            </i>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="info-goshop">
                    <a href={allGoodsUrl}>进店逛逛</a>
                </div>
            </div>
                <Recommend />       
        </div>
        )
    }

    changePlus() {
        if (!this.state.plus) {
            this.setState({ plus: true })
        } else {
            this.setState({ plus: false })
        }
    }
}


export default ShopName