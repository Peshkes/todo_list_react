import style from './prodile_module.css';
import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div  className={style.profile}>
                <div className={style.profileWindow}></div>
            </div>
        );
    }
}

export default Profile;