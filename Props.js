import React, { Component } from 'react'
import Childc from './Childc'

export class Props extends Component {
    
    state = {
             name:'',
            
        }
    
    handleClick=(e)=>{
        this.setState({name:e})
        
    }

    
    render() {
        
        const {name} = this.state;
        return (
            <div>
                <Childc     handleClick={this.handleClick}/>
                {name}
                
            </div>
        )
    }
}

export default Props
