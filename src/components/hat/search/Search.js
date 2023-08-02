import './Search.css';
import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className={'search'}>
                <input type="search"/>
            </div>
        );
    }
}

export default Search;