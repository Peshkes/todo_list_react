import style from './task.module.css';
import React, {Component} from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            isDone: ''
        }
    }

    render() {
        return (
            <div className={style.task}>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Task;