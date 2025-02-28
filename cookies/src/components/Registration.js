import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hasError, setHasError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !phone) {
      setHasError(true);
    } else {
      setName('');
      setEmail('');
      setPhone('');
      setHasError(false);
      setModalVisible(true);
    }
  };

  return (
    <section className="reg" id="registration" style={{margin: '100px 0' }}>
      <img src="/images/line3.png" alt="Line Background" className="line3" />
      <div className="container">
        <div className="common-title">Зарегистрируйтесь на нашем сайте</div>
        <img src="/images/breadcrumbs.png" alt="Breadcrumbs image" className="order-bg-image" />
        <div className="order-block">
          <div className="order-form">
            <div className="order-form-text">
              Регистрация поможет Вам быстрее оформлять заказы без надобности вводить свои данные каждый раз
            </div>
            <div className="order-form-inputs">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ borderColor: hasError && !name ? 'red' : '' }}
              />
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: hasError && !email ? 'red' : '' }}
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ borderColor: hasError && !phone ? 'red' : '' }}
              />
              <button className="button violet-button" onClick={handleRegister} >
                Зарегистрироваться
              </button>
              <button className="button" style={{ width: '100%', margin: '10px 0' }}>
                <Link to="/signin" style={{ textDecoration: 'none', color: '#5243F4' }}>
                  Уже есть аккаунт? Войдите
                </Link>
              </button>
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
                <p className="modal-alert">Спасибо за регистрацию! Вы успешно зарегистрировались.</p>
                <button 
                  className="button violet-button modal-button" 
                  onClick={() => setModalVisible(false)}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Registration;