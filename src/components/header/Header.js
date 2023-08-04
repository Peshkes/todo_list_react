import style from './header.module.css';
import React, {Component} from 'react';
import Menu from "./menu/Menu";
import AddTask from "./add_task/AddTask";
import Theme from "./theme/Theme";
import Profile from "./profile/Profile";
import Search from "./search/Search";
import EmptyBlock from "./empty_block/EmptyBlock";
import SiteName from "./site_name/SiteName";

class Header extends Component {
    render() {
        return (
            <header className={style.hat}>
                <Menu/>
                <SiteName/>
                <EmptyBlock/>
                <AddTask/>
                <Search/>
                <Theme/>
                <Profile/>
            </header>
        );
    }
}

export default Header;