// src/App.js
import React, { useEffect } from 'react';
import './styles/styles.css';
import Header from './components/Header';
import HeaderProfile from './components/HeaderProfile';
import HeaderHelp from './components/HeaderHelp';
import HeaderProducts from './components/HeaderProducts';
import HeaderRegistration from './components/HeaderRegistration';
import Main from './components/Main';
import Products from './components/Products';
import Love from './components/Love';
import SignIn from './components/SignIn';
import Order from './components/Order';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Registration from './components/Registration';
import Profile from './components/Profile';
import Help from './components/Help';
import Slider from './components/Slider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
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
  

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Love />
              <Slider />
              <Footer />
              <Modal />
            </>
          }
        />
        <Route
          path="/products"
          element={
          <>
          <HeaderProducts />
          <Products />
          <Order />
          <Footer />
          <Modal />
          </>
        }
        />
        <Route
          path="/signin"
          element={
          <>
          <HeaderRegistration />
          <SignIn />
          <Footer />
          </>
        }
        />
        <Route path="/registration" element={
    <>
      <HeaderRegistration />
      <Registration />
      <Footer />
    </>
  } />
<Route path="/profile" element={
  <>
    <HeaderProfile />
    <Profile />
    <Footer />
  </>
} />
        <Route path="/help" element={ <>
          <HeaderHelp />
          <Help />
          <Footer />
          <Modal /> </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;