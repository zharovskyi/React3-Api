import React from 'react';
import style from './PhotoCard.module.css';
const PhotoCard = ({ imageProp }) => (
    <div class="photo-card">
        <img src={imageProp.webformatURL} alt={imageProp.type} />

        <div className={style.stats}>
            <p className={style.statsItem}>
                <i class="material-icons">thumb_up</i>
                1108
    </p>
            <p className={style.statsItem}>
                <i class="material-icons">visibility</i>
                320321
    </p>
            <p className={style.statsItem}>
                <i class="material-icons">comment</i>
                129
    </p>
            <p className={style.statsItem}>
                <i className="material-icons">cloud_download</i>
                176019
    </p>
        </div>

        <button type="button" className={style.fullscreenButton}>
            <i class="material-icons">zoom_out_map</i>
        </button>
    </div>
);

export default PhotoCard;