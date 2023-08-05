import './App.css';
import React, {Component} from 'react';
import Main from "./components/main/Main";
import Header from "./components/header/Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFolderListOpen: false
        };
    }

    toggleFolderList = () => {
        this.setState((prevState) => ({
            isFolderListOpen: !prevState.isFolderListOpen
        }));
    }

    render() {
        return (
            <div className="App">
                <Header toggleFolderList={this.toggleFolderList}/>
                <Main isFolderListOpen={this.state.isFolderListOpen}/>
            </div>
        );
    }
}

export default App;
