import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import style from './Gallery.module.css'


const Gallery = ({ images }) => (
    <ul className={style.gallery}>
        {images.map(image => (
            <li> <PhotoCard imageProp={image} /></li>
        ))}

    </ul>
);

export default Gallery;