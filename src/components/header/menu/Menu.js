import style from './menu.module.css';
import React, {Component} from 'react';

class Menu extends Component {
    clickHandler = () => {
        this.props.toggleFolderList();
    }
    render() {
        return (
            <div className={style.menu}>
                <button className={style.menuBtn} onClick={this.clickHandler}/>
            </div>
        );
    }
}

export default Menu;