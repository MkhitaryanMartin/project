import React, { useEffect } from 'react';
import CrossIcon from '../SVG/crossIcon';
import { useSelector } from 'react-redux';
import SuccessIcon from '../SVG/successIcon';
import './style.scss';


const ModalNotification = ({ onClose }) => {

    const { modalProps } = useSelector((state) => state.modal)
    useEffect(() => {
        setTimeout(() => {
            onClose()
        }, 5000)
    }, [])

    return (
        <div className="modal">
            <div className="modal__body">
                <div className='modal__header'>
                    <button className="modal__close" onClick={onClose}>
                        <CrossIcon />
                    </button>
                </div>
                <div className='modal__content'>
                    <SuccessIcon />
                    <p>{modalProps.text}</p>
                </div>
            </div>
        </div>
    )
};

export default ModalNotification;
