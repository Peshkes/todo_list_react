import style from './emptyBlock.module.css';
import React, {Component} from 'react';

class EmptyBlock extends Component {
    render() {
        return (
            <div className={style.emptyBlock}/>
        );
    }
}

export default EmptyBlock;