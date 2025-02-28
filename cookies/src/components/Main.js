// src/components/Main.js
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const Main = () => (
    <section className="main-content">
      <div className="container">
        <img src="/images/line1.png" alt="Line Background" className="line1" />
        <div className="main-info">
          <h1 className="main-title">Магия вкуса в каждой крошке</h1>
          <p className="main-text">
            Наши рецепты вдыхают жизнь в изысканность ингредиентов: ароматное натуральное масло,
            свежие сливки, чистый мёд и отборная мука. Мы тщательно отбираем каждый компонент премиального
            печенья,
            стремясь подарить вам истинное кулинарное наслаждение.
          </p>
          <div className="main-action">
            <button className="button" id="main-action-button">
            <Link to="/products" style={{ textDecoration: 'none', color: '#5243F4' }}>
            Заказать
            </Link>
            </button>
          </div>
        </div>
        <img src="/images/cookie.png" alt="Cookie" className="main-image" />
      </div>
    </section>
  );

export default Main;