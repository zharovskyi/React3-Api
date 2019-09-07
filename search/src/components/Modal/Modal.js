import React, { Component } from 'react';
import style from './Modal.module.css';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.onCloseModal);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onCloseModal)
    }

    onCloseModal = (e) => {
        if (e.which === 27) {
            this.props.handleCloseModal();
        }
    }

    stopPropagation = (e) => {
        e.stopPropagation();
    }

    render() {
        const { largeImageUrl, handleCloseModal } = this.props;
        return (
            <div onClick={handleCloseModal} className={style.basicLightbox} >
                <div className={style.modalContent} onClick={this.stopPropagation}>
                    <img width={600} height={400} src={largeImageUrl} alt="foto" />
                </div>
            </div>
        );
    }
}

export default Modal;

// const Modal = ({ largeImageUrl, onClick}) => (
//     <div className={style.basicLightbox} onClick={onClick} onKeyPress={onKeyPress}>
//         <div className={style.modalContent}>
//             <img src={largeImageUrl} alt="foto" />
//         </div>
//     </div>
// )

// export default Modal;