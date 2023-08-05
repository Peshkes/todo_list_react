import style from './folderList.module.css';
import React, {Component} from 'react';
import Folder from "./folder/Folder";
import TestData from "../../../utils/constants";

class FolderList extends Component {
    render() {
        console.log(TestData.getCustomFolders());
        return (
            <div className={style.folderList}>
                <Folder name={'today'}/>
                <Folder name={'tomorrow'}/>
                {TestData.getCustomFolders().map(item => <Folder name={item}/>)}
            </div>
        );
    }
}

export default FolderList;