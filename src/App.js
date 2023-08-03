import './App.css';
import React, {Component} from 'react';
import Main from "./components/main/Main";
import Header from "./components/header/Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;
