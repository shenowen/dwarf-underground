import React, { Component } from 'react'
import DatingOrcs from './DatingOrcs';
import OMGMountain from './OMGMountain';
import Moincraft from './Moincraft';
import Surprise from './Surprise';

class Clickbait extends Component{
    constructor(props){
        super(props)

        let clickbaits = []

        clickbaits.push(<DatingOrcs />)
        clickbaits.push(<OMGMountain />)
        clickbaits.push(<Moincraft />)
        clickbaits.push(<Surprise />)

        this.state = { clickbaits }
    }
    
    render(){
        return(
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                {this.state.clickbaits.map((Clickbait, index) => (
                    <div key = {index}>
                        {Clickbait}
                    </div>
                ))}
            </div>
        )
    }
}

export default Clickbait