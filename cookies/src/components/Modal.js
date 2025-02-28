import React from 'react';

const Modal = () => (
  <div className="modal d-none" id="modal">
    <div className="modal-content">
      <div className="modal-message">
        <p className="modal-alert">Спасибо за заказ! Мы скоро свяжемся с Вами!</p>
        <button className="button violet-button modal-button" id="modal-button">Закрыть</button>
      </div>
    </div>
  </div>
);

export default Modal;