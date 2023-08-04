import style from './menu.module.css';
import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <div className={style.menu}>
                <button className={style.menuBtn}/>
            </div>
        );
    }
}

export default Menu;