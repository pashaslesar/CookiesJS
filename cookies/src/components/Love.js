// src/components/Love.js
import React from 'react';

const Love = () => (
  <section className="love" id="love">
    <div className="container">
      <div className="common-title">Пекарня с любовью</div>
      <div className="love-items">
        <div className="love-item love-item-white">
          <div className="love-item-title">Приготовлено с заботой, чтобы радовать вас каждый день</div>
          <div className="love-item-text">
            Мы с гордостью представляем наше печенье, которое мы выпекаем вручную каждый день с 1995 года,
            используя только лучшие ингредиенты. Погрузитесь в мир изысканных лакомств, приготовленных
            с применением передовых технологий, и насладитесь их неповторимым вкусом.
          </div>
        </div>
        <div className="love-item love-item-image">
          <img src="/images/love.png" alt="Cookies image" />
        </div>
      </div>
    </div>
  </section>
);

export default Love;