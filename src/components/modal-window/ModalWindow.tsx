import React, { ReactNode } from 'react'
import Popup from 'reactjs-popup';
import { PopupActions } from 'reactjs-popup/dist/types';
import { ModalWindowProps } from './modal_window.types';
import CloseIcon from '@mui/icons-material/Close';
import './modal_window.css'

export type CloseFunction = () => void

const ModalWindow = ({button, children}: ModalWindowProps) => {

    return (
        <Popup
            trigger={button}
            className='modal__window__popup'
            modal
            nested
            lockScroll
        >
            {((close: CloseFunction) => (
                <div className="modal__window__container">
                    <button className="button__wrapper modal__window__close__button" onClick={close}>
                        <CloseIcon/>
                    </button>
                    <div className="modal__window__content">
                        {children}
                    </div>
                </div>
            )) as unknown as ReactNode}
        </Popup>
    );
}

export default ModalWindow