import React, { useEffect } from 'react';

const Products = () => {
  useEffect(() => {
    const prices = document.getElementsByClassName("products-item-price");
    const changeCurrencyElem = document.getElementById("change-currency");
    if (changeCurrencyElem) {
      changeCurrencyElem.onclick = function (e) {
        const currentCurrency = e.target.innerText;

        let newCurrency = "$";
        let coefficient = 1;

        if (currentCurrency === "$") {
          newCurrency = "₽";
          coefficient = 100;
        } else if (currentCurrency === "₽") {
          newCurrency = "BYN";
          coefficient = 3;
        } else if (currentCurrency === "BYN") {
          newCurrency = "€";
          coefficient = 0.9;
        } else if (currentCurrency === "€") {
          newCurrency = "¥";
          coefficient = 6.9;
        }

        e.target.innerText = newCurrency;

        for (let i = 0; i < prices.length; i++) {
          prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
        }
      };
    }
  }, []);

  const handleScrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="products" id="products">

<div class="currency" title="Изменить валюту" id="change-currency">$</div>

      <div className="container">
        <img src="/images/line2.png" alt="Line Background" className="line2" />
        <div className="common-title">Выберите печенье</div>
        <div className="products-items">
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/1.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Лучшие друзья</div>
              <div className="products-item-text">
                Печенье, с которого все началось! Наше фирменное печенье с шоколадной крошкой и грецкими орехами
                хрустящее снаружи с достаточно толстой и липкой серединкой.
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="20">20 $</div>
                  <div className="products-item-weight">2 шт./ 200 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/2.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Шоколадный француз</div>
              <div className="products-item-text">
                Это печенье, изготовленное из тёмного французского какао и полусладкой шоколадной стружки, наверняка
                удовлетворит даже самого заядлого любителя шоколада.
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="24">24 $</div>
                  <div className="products-item-weight">2 шт./ 200 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/3.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Овсянка с изюмом, Сэр!</div>
              <div className="products-item-text">
                Это сдобное маслянистое печенье весом шесть унций каждое, золотисто-коричневое снаружи, влажное
                внутри и наполненное пухлым сладким изюмом.
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="18">18 $</div>
                  <div className="products-item-weight">2 шт./ 200 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/4.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Шоколадное наслаждение</div>
              <div className="products-item-text">
                Идеально хрустящее снаружи и достаточно густое и липкое в центре, это печенье наполнено полусладкой
                и тёмной шоколадной стружкой, придающей богатую глубину вкуса.
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="24">24 $</div>
                  <div className="products-item-weight">2 шт./ 200 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/5.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Арахисовый рай</div>
              <div className="products-item-text">
                Сладкое, пикантное и идеально сбалансированное печенье удовлетворяет тягу любителей арахисового масла
                и шоколада.
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="20">20 $</div>
                  <div className="products-item-weight">2 шт./ 200 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/6.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Шоколадный ореховый деликатес</div>
              <div className="products-item-text">
                Наша фирменная рецептура печенья с шоколадными крошками и грецкими орехами гарантирует незабываемый
                вкусовой опыт. Каждое печенье хрустит снаружи, но раскрывает внутри нежную сердцевину.
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="18">18 $</div>
                  <div className="products-item-weight">2 шт./ 200 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/7.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Ассорти фирменного печенья</div>
              <div className="products-item-text">
                Зачем выбирать один, когда можно получить их все? Наш классический ассортимент печенья включает в себя
                по одному из четырёх оригинальных вкусов печенья.
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="36">36 $</div>
                  <div className="products-item-weight">4 шт./ 400 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/8.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Лимонное печенье</div>
              <div className="products-item-text">
                Весна уже не за горами, но нам не терпелось подарить вам немного солнечного света: наше первое лимонное
                печенье. Это лакомство жевательное, лимонное, не слишком сладкое и даже немного… освежающее?
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="33">33 $</div>
                  <div className="products-item-weight">4 шт./ 400 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/9.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Любители шоколада</div>
              <div className="products-item-text">
                Вам больше не нужно выбирать фаворитов. Мы сделали этот набор для всех людей, которые действительно
                любят шоколад…
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="38">38 $</div>
                  <div className="products-item-weight">4 шт./ 400 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/10.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Карамель и кокос</div>
              <div className="products-item-text">
                Побалуйте себя кокосовым, маслянистым, карамельным печеньем, которое обладает невиданным ранее вкусом и
                текстурой. Наслаждение круглый год.
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="33">33 $</div>
                  <div className="products-item-weight">4 шт./ 400 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/11.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Веганское с шоколадной крошкой</div>
              <div className="products-item-text">
                Наше веганское безглютеновое печенье содержит кусочки хрустящих грецких орехов и полусладкую веганскую
                шоколадную стружку.
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="39">39 $</div>
                  <div className="products-item-weight">4 шт./ 400 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
          <div className="products-item">
            <div className="products-item-image">
              <img src="/images/12.png" alt="Product" />
            </div>
            <div className="products-item-details">
              <div className="products-item-title">Крем-брюле ореховое печенье</div>
              <div className="products-item-text">
                Используя уникальную смесь ингредиентов, мы создали печенье с кусочками крем-брюле и миндальными орехами,
                которое обещает неповторимые гастрономические ощущения. Каждый кусочек обладает хрустящей корочкой и
                тает во рту.
              </div>
              <div className="products-item-extra">
                <div className="products-item-info">
                  <div className="products-item-price" data-base-price="35">35 $</div>
                  <div className="products-item-weight">4 шт./ 400 гр.</div>
                </div>
                <button className="button violet-button" onClick={handleScrollToOrder}>Заказать</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); };

export default Products;