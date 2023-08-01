import './Main.css';
import React, {Component} from 'react';
import TaskList from "./task_list/TaskList";
import Task from "./task/Task";

class Main extends Component {
    render() {
        return (
            <section className={'main'}>
                <TaskList/>
                <Task/>
            </section>
        );
    }
}

export default Main;