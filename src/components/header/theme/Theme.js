import style from './theme.module.css';
import React, {Component} from 'react';

class Theme extends Component {
    render() {
        return (
            <div  className={style.theme}>
                <button className={style.themeBtn}/>
            </div>
        );
    }
}

export default Theme;