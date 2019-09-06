import React from 'react';
import style from './PhotoCard.module.css';

const PhotoCard = ({ webformatURL, type, likes, views, comments, downloads, openModal, largeImageUrl }) => (
    <>
        <div className={style.photoCard}>
            <img src={webformatURL} alt={type} />

            <div className={style.stats}>
                <p className={style.statsItem}>
                    <i className="material-icons">thumb_up</i>
                    {likes}
                </p>
                <p className={style.statsItem}>
                    <i className="material-icons">visibility</i>
                    {views}
                </p>
                <p className={style.statsItem}>
                    <i className="material-icons">comment</i>
                    {comments}
                </p>
                <p className={style.statsItem}>
                    <i className="material-icons">cloud_download</i>
                    {downloads}
                </p>
            </div>
            <button type="button" className={style.fullscreenButton} onClick={() => openModal(largeImageUrl)}>
                <i className="material-icons" style={{ pointerEvents: "none" }}>zoom_out_map</i>
            </button>
        </div>

    </>
);

export default PhotoCard;