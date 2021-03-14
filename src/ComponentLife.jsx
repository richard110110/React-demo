import React, { Component } from 'react'

export default class ComponentLife extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 10
        }
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    changeHanlder = () => {
        this.setState({
            count: this.state.count +=1
        })
    }

    clickChange = () => {
        this.props.clickChanges('i am children"s data');
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                ComponentLife: {count} - {this.props.title}
                <button onClick={this.changeHanlder}>change</button>
                <button onClick={this.clickChange}>change title</button>

            </div>
        )
    }
}
