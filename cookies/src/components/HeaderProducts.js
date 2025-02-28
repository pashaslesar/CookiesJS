// src/components/HeaderProducts.js
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderProducts = () => {
  return (
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
                          <Link to="/registration" style={{ textDecoration: 'none', color: 'white' }}>
                            Регистрация
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
};

export default HeaderProducts;
