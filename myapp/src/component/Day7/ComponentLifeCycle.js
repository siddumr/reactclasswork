import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
    
shouldComponentUpdate()
{
    return true;
}
getSnapshotBeforeUpdate(prevProps, prevState) {
   document.getElementById("id1").innerHTML="Previous value "+prevState.favColor; 
}

    
    
    render() {
        return (
            <div>
              <h1>My favorite color is {this.state.favColor}</h1> 
              <p id="id 
            </div>
        )
    }
}
