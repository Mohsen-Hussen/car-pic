import React, { Component } from 'react'

export class SearchBar extends Component {
    state = {term: ''};
    
    onChangeHandelr = (e) => {
        this.setState({term: e.target.value});
    }

    onSubmitHandelr = (e) => {
        e.preventDefault();
        // console.log(this.state.term);
        this.props.afterEnterSearchValue(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onSubmitHandelr}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={this.onChangeHandelr}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
