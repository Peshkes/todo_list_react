import style from './main.module.css';
import React, {Component} from 'react';
import TaskList from "./task_list/TaskList";
import FolderList from "./folder_list/FolderList";

class Main extends Component {
    render() {
        return (
            <section className={style.main}>
                {this.props.isFolderListOpen && <FolderList/>}
                <TaskList/>
            </section>
        );
    }
}

export default Main;