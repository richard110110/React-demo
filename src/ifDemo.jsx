import React, { Component } from 'react'

export default class IfDemo extends Component {

    /**
     * 1. switch condition visualisation
     * 2. make non-null value
     * 
     * @returns 
     */

    constructor(){
        super();
        this.state = {
            isLogin: false,
            names: ["1"]
        }
    }
    clickHandler = () => {
        this.setState({
            isLogin: true
        })
    }

    render() {
        const {names} = this.state;
        let showView = this.state.isLogin ?
        <div>showView</div> :
        <div>please login</div>

        return (
            <div>
                condition render: {showView}
                <button onClick={this.clickHandler}>login</button>
                {
                    names.length > 0 ? 
                    <div>
                    {
                        names.map((element, index) => {
                            return <p key={index}>{element}</p>
                        })
                    }
                </div>
                :
               <div>please waiting for data request</div>

                }
                
            </div>
        )
    }
}
