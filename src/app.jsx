import React, {Component} from 'react';
import Home from './Home'
import MyNav from './MyNav'
import StateComponent from './StateComponent'
import ComponentLife from './ComponentLife'
class App extends Component {
    render() {

        const nav1 = ["1", "2", "3"];
        const nav2 = ["web", "java", "node"];


        return (
            <div>
                {/* <h1>Hello React Component</h1>
                <Home/>
                <MyNav nav={nav1} title = "nav1"/>
                <MyNav nav={nav2} title = "nav2"/> */}
                {/* <StateComponent/> */}
                <ComponentLife/>

            </div>
        );
    }
}

export default App