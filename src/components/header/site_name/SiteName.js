import style from './siteName_module.css';
import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className={style.siteName}>
                <h1>Task book</h1>
            </div>
        );
    }
}

export default Search;