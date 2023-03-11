import React from "react";

function Header({ isMobile, isTablet }) {
  return (
    <>
      {!isMobile && (
        <header className="header">
          <div className="header__nav">
            <div className="header__nav-logo">
              <img src="./img/logo_welbex.svg" alt="logo" />
              <small className="header__nav-logo-description">
                крупный интегратор CRM <br />в России и еще 8 странах
              </small>
            </div>
            <ul className="header__nav-links">
              <li>
                <a href="#">Услуги</a>
              </li>
              <li>
                <a href="#">Виджеты</a>
              </li>
              <li>
                <a href="#">Интеграции</a>
              </li>
              <li>
                <a href="#">Кейсы</a>
              </li>
              <li>
                <a href="#">Сертификаты</a>
              </li>
            </ul>
          </div>
          {!isTablet && (
            <div className="header__contacts">
              <a href="callto:+7 555 555-55-55">+7 555 555-55-55</a>
              <div className="header__contacts-socials">
                <a href="#">
                  <img src="./img/telegram.svg" alt="telegram" />
                </a>
                <a href="#">
                  <img src="./img/viber.svg" alt="viber" />
                </a>
                <a href="#">
                  <img src="./img/whatsapp.svg" alt="whatsapp" />
                </a>
              </div>
            </div>
          )}
        </header>
      )}
      {isMobile && (
        <header className="header_mobile">
          <ul className="header_mobile-links">
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Виджеты</a>
            </li>
            <li>
              <a href="#">Интеграции</a>
            </li>
            <li>
              <a href="#">Кейсы</a>
            </li>
          </ul>
        </header>
      )}
    </>
  );
}

export default Header;
