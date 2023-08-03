import style from './search_module.css';
import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className={style.search}>
                <input type="search"/>
            </div>
        );
    }
}

export default Search;