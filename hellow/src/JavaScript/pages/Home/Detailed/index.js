import React ,{ Component } from 'react'
import axios from 'axios'
import './indexbox.css'
import Banner from './Banner/Banner'
import Introduce from './Introduce/introduce'

class Detailed extends Component {

    constructor(props){
        super(props)
        this.state = {
            bannerImgs: [] ,
            introduce : [] ,
            sales : [],
            shopInfo: null
        }
    }

    getBannerImg () {
        axios.get('/mx/detail/mls/v1/h5',{
            params:{
                iid:'1ltrxbs' ,
                _ajax:'1',
                cparam:'MTUyNDU4MDQxNV8xYmZ3OTB3X2I2N2RjMGQxYjU5ODE2NGIxNGE0MDIxODhjNjIyZTJhXzMyXzRfMzQ1OTEzNDA0XzBfMTk2NDU1OV81XzBfMjM4XzBfMA%3D%3D'
                
            }
        }).then((res)=>{
            //console.log(res)
             this.setState({bannerImgs: res.data.result.itemInfo.topImages })
             this.setState({introduce : res.data.result.itemInfo })
             this.setState({sales : res.data.result.columns })
             this.setState({ shopInfo :  res.data.result.shopInfo})

        })
   }
    componentWillMount(){
        this.getBannerImg()
    }


    renderBanner(){
        let { bannerImgs,introduce,sales,shopInfo } = this.state 
       
        if(  bannerImgs.length ){
            //console.log( bannerImgs )
            return (
                    <div className='IndexBox' >
                        <Banner bannerImgs = { bannerImgs }  />
                        <Introduce  introduce={ introduce} sales={sales} shopInfo={ shopInfo }   /> 
                    </div>
            )
        }else{
            return ""
        } 
    }


    render () {
       return (
           <div >
                {
                    this.renderBanner()
                }
           </div>
       )
    }

    

}

export default   Detailed 