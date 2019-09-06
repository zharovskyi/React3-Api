import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import style from './Gallery.module.css';
import PropTypes from 'prop-types';


const Gallery = ({ images, onClick, openModal }) => (
    <>
        <ul className={style.gallery}>
            {images.map(image => (
                <li key={image.id} className={style.galleryItem}>
                    <PhotoCard
                        webformatURL={image.webformatURL}
                        type={image.type}
                        likes={image.likes}
                        views={image.views}
                        comments={image.comments}
                        downloads={image.downloads}
                        largeImageUrl={image.largeImageURL}
                        openModal={openModal} /></li>
            ))}

        </ul>
        <button className={style.button} onClick={onClick}>Load More</button>
    </>
);

export default Gallery;

Gallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            webformatURL: PropTypes.string,
            likes: PropTypes.number,
            views: PropTypes.number,
            comments: PropTypes.number,
            downloads: PropTypes.number,
        }).isRequired,
    ).isRequired,
    onClick: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
}
