import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // console.log(props.images);
    const imagesFromApi = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    });
    return (
        <div className="image-list">
            {imagesFromApi}
        </div>
    )
}

export default ImageList;