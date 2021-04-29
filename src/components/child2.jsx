import React, { Component } from 'react'

export default class Child2 extends Component {
    constructor(){
        super();
        this.state = {
            input2:0
        }
    }

    componentDidMount(){
        this.setState({
            input2: this.props.money * 7
        })
    }

    
    changeHandler(e){
        this.setState({
            input2: e.target.value
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.money * 7}</p>
                <input type="text" value = {this.state.input2} onChange={this.changeHandler.bind(this)}/>
            </div>
        )
    }
}
