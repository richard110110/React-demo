import React, { Component } from 'react'

export default class Child1 extends Component {

    constructor(){
        super();
        this.state = {
            input1: 0
        }
    }

    componentDidMount(){
        this.setState({
            input1: this.props.money
        })
    }

    changeHandler(e){
        this.setState({
            input1: e.target.value
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.money}</p>
                <input type="text" value = {this.state.input1} onChange={this.changeHandler.bind(this)}/>
            </div>
        )
    }
}
