
import React , { Component } from  'react' 
import { NavLink } from 'react-router-dom'
import "./footer.css"

let  NavItem = (props)=> {
   let { title , ico, path } = props.info 
    return (
                <NavLink className=" active" to={{pathname:path}} >
                    <span className={`icon icon-${ico}`}></span>
                    <span className="tab-label">{title}</span>
                </NavLink>  
    )
}

  

class Footer extends Component {
    
    render() {
        let { navs } =this.props
        return (
            <nav className="footer">
                   {
                       navs.map((item) => {
                            return <NavItem key={ item.id } info = {item}  />
                       })

                    }
                   
          </nav>
          
        )
    }

}
Footer.defaultProps = {
    navs:[
        {id:1,title:'首页',ico:'home',path:'/Home'},
        {id:2,title:'分类',ico:'home',path:'/ClassiFication'},
        {id:3,title:'购物车',ico:'cart',path:'/Car'},
        {id:4,title:'我的',ico:'me',path:'/Me'}
    ]
}




export default  Footer

