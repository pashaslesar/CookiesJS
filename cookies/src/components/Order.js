import React, { useState } from 'react';

const Order = () => {
  const [product, setProduct] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [hasError, setHasError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOrder = () => {
    if (!product || !name || !phone) {
      setHasError(true);
    } else {
      setProduct('');
      setName('');
      setPhone('');
      setHasError(false);
      setModalVisible(true);
    }
  };

  return (
    <section className="order" id="order">
      <img src="/images/line3.png" alt="Line Background" className="line3" />
      <div className="container">
        <div className="common-title">Закажите печенье</div>
        <img src="/images/breadcrumbs.png" alt="Breadcrumbs image" className="order-bg-image" />
        <div className="order-block">
          <div className="order-form">
            <div className="order-form-text">
              Откройте для себя волшебство вкуса с нашим премиальным печеньем! Закажите прямо сейчас
              и окунитесь
              в мир сладких наслаждений.
            </div>
            <div className="order-form-inputs">
              <input
                type="text"
                placeholder="Выберите печенье"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                style={{ borderColor: hasError && !product ? 'red' : '' }}
              />
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ borderColor: hasError && !name ? 'red' : '' }}
              />
              <input
                type="text"
                placeholder="Ваш телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ borderColor: hasError && !phone ? 'red' : '' }}
              />
              <button className="button violet-button" onClick={handleOrder}>Оформить заказ</button>
            </div>
          </div>
          <div className="order-block-image">
            <img src="/images/order.png" alt="Cookies image" className="order-image" />
          </div>
        </div>
        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-message">
                <p className="modal-alert">Спасибо за заказ! Мы скоро свяжемся с Вами!</p>
                <button className="button violet-button modal-button" onClick={() => setModalVisible(false)}>Закрыть</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Order;