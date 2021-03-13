import React, { Component } from 'react'

export default class MyNav extends Component {
    render() {

        console.log(this.props.nav);
        //列表渲染
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul>
                    {
                        this.props.nav.map((element, index)=> {
                            return <li key={index}>{element}</li>
                        })
                    }                              
                </ul>
            </div>
        )
    }
}
