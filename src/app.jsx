import React, {Component} from 'react';
import Home from './Home'
import MyNav from './MyNav'
class App extends Component {
    render() {

        const nav1 = ["1", "2", "3"];
        const nav2 = ["web", "java", "node"];


        return (
            <div>
                <h1>Hello React Component</h1>
                <Home/>
                <MyNav nav={nav1}/>
                <MyNav nav={nav2}/>
            </div>
        );
    }
}

export default App