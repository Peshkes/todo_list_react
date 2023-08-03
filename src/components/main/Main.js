import style from './main_module.css';
import React, {Component} from 'react';
import TaskList from "./task_list/TaskList";
import Task from "./task/Task";

class Main extends Component {
    render() {
        return (
            <section className={style.main}>
                <TaskList/>
                <Task/>
            </section>
        );
    }
}

export default Main;