import React from 'react';
import ModalInner from '../ModalInner/ModalInner'

const Modal = ({ movies, selectAMovie }) => {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h4 className='modal-title'>Modal title</h4>
                </div>
                <div className='modal-body'>
                <img className='mini-poster' id={id} src={posterImage} alt='poster'/>
                <img className='logo' src={logo} alt='logo'/>
                <p className='rating'>{rating}</p>
                </div>
                <div className='modal-footer'>
                    <button className='button'>Close</button>
                </div>
            </div>       
        </div>
    )
}

export default Modal