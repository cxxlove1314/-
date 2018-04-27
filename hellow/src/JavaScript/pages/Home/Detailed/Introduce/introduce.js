
import React, { Component } from 'react'
import ShopName from "../ShopName/ShopName"
import './introduce.css'

class Introduce extends Component {

    renderSpan(){
        if( this.props.introduce.extra ){
           let { sendAddress } = this.props.introduce.extra
           return (
               <span className="info-other2">
                    <span className="item">{sendAddress}</span>
                </span>
           )
        }
    }
    renShopInfn(){
       
        if( this.props.shopInfo){
            return true
        }
        return false

    }

    render () {
        let { 
                desc,
                price,
                oldPrice,
                discountDesc,
                discountBgColor ,
        } = this.props.introduce
        let { Services } =this.props
        let { sales } = this.props
        let { shopInfo } = this.props
        //console.log( this.props )
        
      return (
        <div>
                <div className="break">
                    <span className="name">{ desc }</span>
                
                </div>
            
                <div className="Price_box">
                        <span className="now">{price}</span>
                        <span className="original">{ oldPrice }</span>
                        <span className="discount" stayle ={{background : `${discountBgColor}` }}  >{discountDesc}</span>
                </div>
                <div className="info-other info-other-notopbor">
                    <span className="item">{ sales[0] }</span>
                    <span className="item">{sales[1]}</span>
                    {
                        this.renderSpan()
                    }
                </div>

                <div className="info-services" id="J_Services">
                    <div className="flex service-list">
                    {
                        Services.map(( item )=>{
                            return (
                                <span className="service-item" key = {item.id }>
                                    <img className="service-icon" src={item.img} alt=""/>
                                    <span className="service-name">{ item.content }</span>
                                </span>
                            )
                        })
                    }
                        <img className="service-arrow" src="https://s10.mogucdn.com/mlcdn/c45406/170711_701e7hcfi1j9fe76hgd560bj28d87_14x22.png" alt=""/>   
                    </div>
                    <div className="shop-top"></div>  
                </div>
                    {
                        this.renShopInfn() ? <ShopName  shopInfo = { shopInfo }/> : ''
                    }
        </div> 
      )
    }
}
Introduce.defaultProps = {
    Services:[ 
        {id:'1',content:'退货补运费' ,img:"//s3.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"},
        {id:'2',content:'全国包邮' ,img:"//s3.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"},
        {id:'3',content:'7天无理由退货' ,img:"//s3.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"},
        
    ]
}


export default Introduce