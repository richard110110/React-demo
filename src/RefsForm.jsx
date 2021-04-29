import React, { Component } from 'react'

export default class RefsForm extends Component {

    constructor(){
        super();
        this.username = React.createRef();
        this.password = React.createRef();
    }

    clickHandler = (e) =>{
        console.log(this.username.current.value);
        console.log(this.password.current.value);

    }

    render() {
        return (
            <div>
                <input type="text" ref={this.username}/>
                <input type="text" ref={this.password}/>
                <button onClick={this.clickHandler}>submit</button>
            </div>
        )
    }
}
