// src/components/HeaderProfile.js
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderProfile = () => (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-item">
                          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            Главная страница
                          </Link>
                        </li>
            <li className="menu-item">
              <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
                Оформить заказ
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/help" style={{ textDecoration: 'none', color: 'white' }}>
                Q&A
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );

export default HeaderProfile;
