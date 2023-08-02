import './Hat.css';
import React, {Component} from 'react';
import Menu from "./menu/Menu";
import AddTask from "./add_task/AddTask";
import Theme from "./theme/Theme";
import Profile from "./profile/Profile";
import Search from "./search/Search";

class Hat extends Component {
    render() {
        return (
            <header className={'hat'}>
                <Menu/>
                <div className={'siteName'}>
                    <h1>Task book</h1>
                </div>
                <div className={'emptyBlock'}/>
                <AddTask/>
                <Search/>
                <Theme/>
                <Profile/>
            </header>
        );
    }
}

export default Hat;