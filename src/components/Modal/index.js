import React from 'react';
import './modal.css'; // Estilos para o modal

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Não renderiza nada se o modal não estiver aberto

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="close-button">X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;