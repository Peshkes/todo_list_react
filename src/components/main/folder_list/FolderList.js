import style from './folderList.module.css';
import React, {Component} from 'react';
import Folder from "./folder/Folder";
import TestData from "../../../utils/constants";

class FolderList extends Component {
    render() {
        return (
            <div className={style.folderList}>
                {TestData.startFolders.map((item, index) =>
                    <Folder isActive={(index === this.props.selectedFolder)} name={item.name} index={index} selectFolder={this.props.selectFolder} key={'folder_' + index}/>)}
            </div>
        );
    }
}

export default FolderList;