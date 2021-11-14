import React, { Component } from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export class MainContainer extends Component {
    state = { images: [] }
    // onSearchSubmit = (term) => {
    //     console.log(term);
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: term},
    //         headers: {
    //             Authorization: 'Client-ID unSeMW9lYDSVdUggqV60ElLeuJBck2zKMPje-TNMz_I'
    //         }
    //     }).then((response) => {
    //         console.log(response.data.results);
    //         console.log(response.data.results[0].urls.regular);
    //     });
    // }
    onSearchSubmit = async (term) => {
        // console.log(term);
        const response = await unsplash.get('/search/photos',{
            params: {query: term},
        });
        // console.log(response.data.results);
        this.setState({images: response.data.results});
    }
    render() {
        return (
            <div className="ui container" style={{marginTop : "10px"}}>
                <SearchBar afterEnterSearchValue={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default MainContainer;