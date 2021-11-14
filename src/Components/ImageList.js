import React from 'react';

const ImageList = (props) => {
    // console.log(props.images);
    const imagesFromApi = props.images.map((image) => {
        return <img src={image.urls.regular} alt={image.description} key={image.id}/>
    });
    return (
        <div>
            {imagesFromApi}
        </div>
    )
}

export default ImageList;