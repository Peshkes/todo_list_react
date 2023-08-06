import style from './main.module.css';
import React, {Component} from 'react';
import TaskList from "./task_list/TaskList";
import FolderList from "./folder_list/FolderList";
import TestData from "../../utils/constants";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_folder: 0,
            folders: TestData.startFolders
        };
    }

    selectFolder = (index) => {
        this.setState({
            selected_folder: index
        })
    }

    render() {
        return (
            <section className={style.main}>
                {this.props.isFolderListOpen && <FolderList selectFolder={this.selectFolder} selectedFolder={this.state.selected_folder}/>}
                <TaskList taskList={this.state.folders[this.state.selected_folder]}/>
            </section>
        );
    }
}

export default Main;