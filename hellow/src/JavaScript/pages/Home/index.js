
import React ,{ Component } from 'react'

import Homebanner from "./Homebanner/Homebanner"
import Data from "./Data/Data"
import Weekpop from "./Weekpop/Weekpop"
import Shopshow from "./Shopshow/Shopshow"


class Home extends Component {
    render () {
       return (
       	<div style={{"marginTop":"45px"}} className="home page conent">
           <Homebanner/>
           <Data/>
           <Weekpop/>
           <Shopshow/>
        </div>

       )
    }
}

export default Home