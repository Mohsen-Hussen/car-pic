import React, { Component } from 'react';
import SearchBar from './SearchBar';

export class MainContainer extends Component {
    onSearchSubmit = (term) => {
        console.log(term);
    }
    render() {
        return (
            <div className="ui container" style={{marginTop : "10px"}}>
                <SearchBar afterEnterSearchValue={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default MainContainer;