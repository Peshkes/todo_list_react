import './App.css';
import React, {Component} from 'react';
import Hat from "./components/hat/Hat";
import Main from "./components/main/Main";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <Hat/>
                <Main/>
            </div>
        );
    }
}

export default App;
