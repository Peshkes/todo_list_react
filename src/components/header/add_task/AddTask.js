import style from './addTask.module.css';
import React, {Component} from 'react';

class AddTask extends Component {
    render() {
        return (
            <div className={style.addTask}>
                <button className={style.addBtn}/>
            </div>
        );
    }
}

export default AddTask;