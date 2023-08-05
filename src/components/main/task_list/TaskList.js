import style from './taskList.module.css';
import React, {Component} from 'react';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksCount: 0
        }
    }

    render() {
        return (
            <div className={style.taskList}>
                <h3 className={style.title}>{this.props.title}</h3>
            </div>
        );
    }
}

export default TaskList;