
import React ,{ Component } from 'react'
import { NavLink , Route } from 'react-router-dom'

import Detailed from './Detailed'
class Home extends Component {
    render () {
        let { path } = this.props.match
        
       return (
           <div >
           <NavLink  to={`${path}/detailed`}> 小猪佩奇 </NavLink>
            
            <Route exact path={`${path}/detailed`} component={Detailed} />
            
            
           </div>
       )
    }
}

export default Home