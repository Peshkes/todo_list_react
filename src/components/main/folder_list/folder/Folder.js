import style from './folder.module.css';
import React, {Component} from 'react';

class Folder extends Component {
    render() {
        return (
            <div className={style.folder}>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Folder;