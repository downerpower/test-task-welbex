import React from "react";

const Footer = ({isMobile}) => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__main-links">
          <div className="footer__main-links-company">
            <h4 className="footer__main-title">О компании</h4>
            <ul className="footer__main-links-lists">
              <li>
                <a href="#"></a>Партнёрская программа
              </li>
              <li>
                <a href="#"></a>Вакансии
              </li>
            </ul>
          </div>
          <div className="footer__main-menu">
            <h4 className="footer__main-title">Меню</h4>
            <div className="footer__main-menu-links">
              <ul className="footer__main-links-lists">
                <li>
                  <a href="#"></a>Расчёт {isMobile && <br />}стоимости
                </li>
                <li>
                  <a href="#"></a>Услуги
                </li>
                <li>
                  <a href="#"></a>Виджеты
                </li>
                <li>
                  <a href="#"></a>Интеграции
                </li>
                <li>
                  <a href="#"></a>Наши клиенты
                </li>
              </ul>
              <ul className="footer__main-links-lists">
                <li>
                  <a href="#"></a>Кейсы
                </li>
                <li>
                  <a href="#"></a>{!isMobile ? 'Благодарность клиентов' : 'Благодарственные письма'}
                </li>
                <li>
                  <a href="#"></a>Сертификаты
                </li>
                <li>
                  <a href="#"></a>Блог на Youtube
                </li>
                <li>
                  <a href="#"></a>Вопрос / Ответ
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__main-contacts">
          <h4 className="footer__main-title">Контакты</h4>
          <a className="footer__main-number" href="callto:+7 555 555-55-55">+7 555 555-55-55</a>
          <div className="footer__main-contacts-socials">
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
          <p className="footer__main-address">Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </div>
      <div className="footer__copyrights">
        <small>
          ©WELBEX 2022. Все права защищены. <br />{" "}
          <span>Политика конфиденциальности</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
