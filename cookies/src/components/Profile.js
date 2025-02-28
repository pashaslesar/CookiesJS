import React, { useState, useRef } from 'react';
import '../styles/styles.css';

const Profile = () => {
  const [name, setName] = useState('Иван Иванов');
  const [email, setEmail] = useState('example@mail.ru');
  const [phone, setPhone] = useState('+7 (999) 123-45-67');
  const [avatarSrc, setAvatarSrc] = useState('/images/default-avatar.png');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const deletePasswordRef = useRef(null);
  
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSaveProfile = () => {
    setSuccessMessage('Ваш профиль успешно обновлен!');
    setShowSuccessModal(true);
  };
  
  const handlePasswordChange = () => {
    setShowPasswordModal(false);
    setSuccessMessage('Пароль успешно изменен!');
    setShowSuccessModal(true);
    
    if (currentPasswordRef.current) currentPasswordRef.current.value = '';
    if (newPasswordRef.current) currentPasswordRef.current.value = '';
    if (confirmPasswordRef.current) currentPasswordRef.current.value = '';
  };
  
  const handleDeleteAccount = () => {
    setShowDeleteModal(false);
    alert('Аккаунт успешно удален. Вы будете перенаправлены на главную страницу.');
    window.location.href = '/';
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="profile" id="profile" style={{ margin: '100px 0' }}>
      <img src="/images/line2.png" alt="Line Background" className="line2" />
      <div className="container">
        <div className="common-title">Ваш профиль</div>
        <div className="order-block profile-block">
          <div className="profile-avatar-section">
            <div className="avatar-container">
              <img id="avatar-preview" src={avatarSrc} alt="Avatar" className="user-avatar" />
              <div className="avatar-change" style={{ margin: '20px 0' }}>
                <label htmlFor="avatar-upload" className="button violet-button">
                  Изменить аватар
                </label>
                <input 
                  type="file" 
                  id="avatar-upload" 
                  style={{ display: 'none' }} 
                  accept="image/*"
                  onChange={handleAvatarChange} 
                />
              </div>
            </div>
          </div>
          <div className="order-form">
            <div className="order-form-text">
              Ваши контактные данные
            </div>
            <div className="order-form-inputs">
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button className="button violet-button" onClick={handleSaveProfile}>
                Сохранить изменения
              </button>
            </div>
            <div className="profile-additional-info">
              <div className="profile-section">
                <h3 className="profile-section-title">Настройки аккаунта</h3>
                <button className="button" onClick={() => setShowPasswordModal(true)} style={{ margin: '0 10px 0 0' }}>
                  Сменить пароль
                </button>
                <button 
                  className="button" 
                  onClick={() => setShowDeleteModal(true)}
                  style={{ marginTop: '10px', backgroundColor: '#ff5252', color: 'white' }}
                >
                  Удалить аккаунт
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPasswordModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-message">
              <h3>Изменение пароля</h3>
              <div className="order-form-inputs-password" style={{ margin: '20px 0' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Текущий пароль" 
                  ref={currentPasswordRef} 
                />
                <input
                  type={showPassword ? "text" : "password"} 
                  placeholder="Новый пароль" 
                  ref={newPasswordRef} 
                />
                <input
                  type={showPassword ? "text" : "password"} 
                  placeholder="Подтвердите новый пароль" 
                  ref={confirmPasswordRef} 
                />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Введите новый пароль еще раз" 
                />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Введите текущий пароль еще раз" 
                />
                <button 
                  className="button" 
                  onClick={toggleShowPassword}
                  style={{ marginTop: '10px' }}
                >
                  {showPassword ? "Скрыть пароль" : "Показать пароль"}
                </button>
              </div>
              <button 
                className="button violet-button modal-button" 
                onClick={handlePasswordChange}
              >
                Изменить пароль
              </button>
              <button 
                className="button modal-button" 
                onClick={() => setShowPasswordModal(false)} 
                style={{ marginTop: '10px' }}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-message">
              <h3>Удаление аккаунта</h3>
              <p className="modal-alert">
                Вы уверены, что хотите удалить свой аккаунт? Это действие нельзя отменить.
              </p>
              <div className="order-form-inputs" style={{ margin: '20px 0' }}>
                <input 
                  type="password" 
                  placeholder="Введите пароль для подтверждения" 
                  ref={deletePasswordRef} 
                />
              </div>
              <button 
                className="button modal-button" 
                onClick={handleDeleteAccount}
                style={{ backgroundColor: '#ff5252', color: 'white' }}
              >
                Удалить аккаунт
              </button>
              <button 
                className="button modal-button" 
                onClick={() => setShowDeleteModal(false)} 
                style={{ marginTop: '10px' }}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-message">
              <p className="modal-alert">{successMessage}</p>
              <button 
                className="button violet-button modal-button" 
                onClick={() => setShowSuccessModal(false)}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;