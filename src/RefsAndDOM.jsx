import React, { Component } from 'react'

export default class RefsAndDOM extends React.Component {

    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount(){
        // console.log(this.myRef.current);
        this.myRef.current.style.color = "red";
    
    }

    render() {
        return (
            <div>
                Refs and DOM
                <div ref={this.myRef}>
                    Hello
                </div>
            </div>
        )
    }
}
