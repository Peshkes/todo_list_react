import style from './folder.module.css';
import React, {Component} from 'react';

class Folder extends Component {
    activeClass;
    constructor(props) {
        super(props);
        this.activeClass = (this.props.isActive) ?  ' active' : '';
    }

    clickHandler = (e) => {
        this.props.selectFolder(this.props.index);
        e.target.classList.toggle(style.active);
    }
    render() {
        return (
            <div className={style.folder + this.activeClass} onClick={this.clickHandler}>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Folder;