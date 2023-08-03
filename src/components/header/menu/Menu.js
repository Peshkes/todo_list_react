import style from './menu_module.css';
import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className={style.menu}>
                <button className={style.menuBtn}/>
            </nav>
        );
    }
}

export default Menu;