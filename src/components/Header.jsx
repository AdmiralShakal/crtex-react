import React from 'react';
import illustration from '../assets/png/svgillustr/illustration.svg';
import { useState } from 'react';

function Header({ burgerActive, setBurgerActive }) {
  return (
    <header className="header">
      <div onClick={() => setBurgerActive(!burgerActive)} className="burger">
        <span></span>
      </div>
      <div className={burgerActive ? 'header__top header__top--open' : 'header__top'}>
        <div className="container">
          <div className="header__top-iner">
            <a href="#" className="header__logo logo">
              <img src={require('../assets/png/logos/main-logo.svg').default} alt="Logo" />
            </a>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    About us
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    Courses
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    Events
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__btn-box">
              <a href="#" className="header__top-btn button">
                Get consultation
              </a>
              <div className="header__user-nav">
                <a href="#" className="header__user-btn">
                  Log in
                </a>
                /
                <a href="#" className="header__user-btn">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__body">
        <div className="container">
          <div className="header__body-inner">
            <div className="header__main">
              <div className="header__content">
                <a
                  href="#"
                  className="header__play"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
                  }}>
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26" cy="26" r="26" fill="#FF3F3A" />
                    <path
                      d="M32.5 25.134C33.1667 25.5189 33.1667 26.4811 32.5 26.866L23.5 32.0622C22.8333 32.4471 22 31.966 22 31.1962L22 20.8038C22 20.034 22.8333 19.5529 23.5 19.9378L32.5 25.134Z"
                      fill="white"
                    />
                  </svg>
                  play showreel
                </a>
                <h1 className="header__title">Enjoy studying with Createx Online Courses</h1>
                <div className="header__content-btns">
                  <a href="#" className="header__contens-btn button button--empty">
                    About ass
                  </a>
                  <a href="#" className="header__contens-btn button">
                    Explore courses
                  </a>
                </div>
              </div>
              <img className="header__illustration" src={illustration}></img>
            </div>
            <ul className="header__row">
              <li className="header__row-item">
                <span>1200</span> Students graduated
              </li>
              <span></span>
              <li className="header__row-item">
                <span>84</span> Completed Courses
              </li>
              <span></span>
              <li className="header__row-item">
                <span>0</span> Qualified Tuttors
              </li>
              <span></span>
              <li className="header__row-item">
                <span>5</span> Years of Experience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
