import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
    render() {
        const { children, 
                isOpen, 
                defaultAction, 
                defaultActionText = 'Okay', 
                secondaryAction = null, 
                secondaryActionText = 'Go to cart' } = this.props;
        if (isOpen) {
            return (
                <div className="ws-modal">
                    <div className="ws-modal-content">
                        {children}
                        <div className="ws-modal-actions center">
                            <button className="btn btn-large purple" onClick={defaultAction}>{defaultActionText}</button>
                            {
                            secondaryAction
                                ? <button onClick={secondaryAction} className="btn btn-large">{secondaryActionText}</button>
                                : null
                            }
                        </div>  
                    </div>
                </div>
            )
        }

        return null;
    }
}

export default Modal;
