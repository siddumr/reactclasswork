import React,{Component} from 'react';
class StateClass extends Component 
{
    state={
        color:"Yellow",
        price:100
    }
    handleChange=()=>{
        this.setState({color:"Red"})
        this.setState({price:2000})
    }
    render()
    {
        return(
            <div>
            <h1>The color i have selected is {this.state.color} the price is {this.state.price}</h1>
            <button onClick={this.handleChange}>Click</button></div>
        )
    }
}

export default StateClass;