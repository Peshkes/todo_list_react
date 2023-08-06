import style from './taskList.module.css';
import React, {Component} from 'react';
import Task from "./task/Task";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasksCount: this.props.taskList.tasks
        }
    }

    render() {
        return (
            <div className={style.taskList}>
                <h3 className={style.title}>{this.props.taskList.name}</h3>
                {this.props.taskList.tasks.map((item, index) => <Task text={item} key={'task_' + index}/>)}
            </div>
        );
    }
}

export default TaskList;