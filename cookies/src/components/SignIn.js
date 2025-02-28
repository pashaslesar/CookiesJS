import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignIn = () => {
    if (!email || !password) {
      setHasError(true);
      setErrorMessage('Пожалуйста, заполните все поля');
      return;
    }

    setHasError(false);
    setModalVisible(true);

    setEmail('');
    setPassword('');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="signin" id="signin" style={{ margin: '100px 0' }}>
      <img src="/images/line1.png" alt="Line Background" className="line1" />
      <img src="/images/line3.png" alt="Line Background" className="line3" />
      <div className="container">
        <div className="common-title">Вход в аккаунт</div>
        <img src="/images/breadcrumbs.png" alt="Breadcrumbs image" className="order-bg-image" />
        <div className="order-block">
          <div className="order-form">
            <div className="order-form-text">
              Войдите в свой аккаунт для быстрого оформления заказов и доступа к специальным предложениям
            </div>
            <div className="order-form-inputs">
              {hasError && (
                <div className="error-message" style={{ 
                  color: '#ff5252', 
                  marginBottom: '10px', 
                  backgroundColor: 'rgba(255, 82, 82, 0.1)', 
                  padding: '10px', 
                  borderRadius: '5px' 
                }}>
                  {errorMessage}
                </div>
              )}
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: hasError && !email ? 'red' : '' }}
              />
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Ваш пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ 
                    borderColor: hasError && !password ? 'red' : '',
                    width: '100%'
                  }}
                />
              </div>
              <button 
                className="button" 
                onClick={toggleShowPassword}
                style={{ 
                  width: '100%',
                  height: '68px',
                  marginBottom: '16px'
                }}
              >
                {showPassword ? "Скрыть пароль" : "Показать пароль"}
              </button>
              <button 
                className="button violet-button" 
                onClick={handleSignIn}
                style={{ width: '100%', margin: '0 0 20px 0', fontWeight: 'bold' }}
              >
                Войти
              </button>
              <div style={{ 
                textAlign: 'center', 
                margin: '15px 0',
                fontWeight: 'bold' 
              }}>
                Нет аккаунта?
              </div>
              <Link to="/registration" style={{ width: '100%' }}>
                <button className="button" style={{ width: '100%' }}>
                  Зарегистрироваться
                </button>
              </Link>
            </div>
          </div>
          <div className="order-block-image">
            <img src="/images/order.png" alt="Cookies image" className="order-image" />
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-message">
              <p className="modal-alert">Вы успешно вошли в систему!</p>
              <Link to="/">
                <button className="button violet-button modal-button">
                  На главную
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SignIn;