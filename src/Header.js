import React, { Component } from 'react'
import HeaderHeadline from './HeaderHeadline'
import HeaderRedirects from './HeaderRedirects'

class Header extends Component{

    render(){
        return(
            <div className="expanded row header">
            <div className="clearfix">
              <div className="float-left logo">
                <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
              </div>
                <HeaderRedirects />
            </div>
            <HeaderHeadline />
          </div>
        )
        
    }
}

export default Header