import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age,
        }
    }  
    addOne() {
        alert(`Happy Birthday ${this.props.firstName}`)
        this.setState({age : this.state.age + 1})
    }
    render(){
        return(
            <div>
                <h1>{this.props.lastName}{this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={() => this.addOne()}>Birthday Button for {this.props.firstName}</button>
            </div>
        );
    }
}

export default PersonCard;