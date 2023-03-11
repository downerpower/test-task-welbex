import React from "react";

const Main = ({ isMobile }) => {
  return (
    <>
      {!isMobile && (
        <main className="main">
          <div className="main__title">
            <h1 className="main__title-title">
              Зарабатывайте <br />
              больше <br />
              <span> c WELBEX</span>
            </h1>
            <p className="main__title-description">
              Развиваем и контролируем <br />
              продажи за вас
            </p>
          </div>
          <div className="main__about">
            <h4 className="main__about-title">
              Вместе c <span>бесплатной </span> <br />
              <span>консультацией</span> мы дарим:
            </h4>
            <div className="main__about-description">
              <div className="main__about-description-group">
                <h5 className="main__about-description-group-title">Виджеты</h5>
                <p className="main__about-description-group-paragraph">
                  30 готовых <br /> решений
                </p>
                <h5 className="main__about-description-group-title">
                  Skype Аудит
                </h5>
                <p className="main__about-description-group-paragraph">
                  отдела продажи <br />и CRM системы
                </p>
              </div>
              <div className="main__about-description-group">
                <h5 className="main__about-description-group-title">
                  Dashboard
                </h5>
                <p className="main__about-description-group-paragraph">
                  c показателями <br /> вашего бизнеса
                </p>
                <h5 className="main__about-description-group-title">35 дней</h5>
                <p className="main__about-description-group-paragraph">
                  использования <br /> CRM
                </p>
              </div>
            </div>
            <button className="main__about-button">
              Получить консультацию
            </button>
          </div>
        </main>
      )}
      {isMobile && (
        <main className="main_mobile">
          <div className="light__red"></div>
          <div className="light__yellow"></div>
          <div className="light__purple"></div>
          <div className="ball__red"></div>
          <img
            className="bgimg__purple-ball-blurred"
            src="./img/purple-ball-blurred.svg"
            alt="purple-ball"
          />
          <img className="bgimg__red" src="./img/red-ball.svg" alt="red-ball" />
          <div className="main__title">
            <h1 className="main__title-title">
              Зарабатывайте <br />
              больше <br />
              <span> c WELBEX</span>
            </h1>
            <p className="main__title-description">
              Развиваем и контролируем <br />
              продажи за вас
            </p>
          </div>
          <div className="main__about">
            <h4 className="main__about-title">
              Вместе c <span>бесплатной </span> <br />
              <span>консультацией</span> мы дарим:
            </h4>
            <div className="main_mobile-descriptions">
              <p className="main_mobile-descriptions-description">
                <span>—</span> Skype аудит
              </p>
              <p className="main_mobile-descriptions-description">
                <span>—</span> 30 виджетов
              </p>
              <p className="main_mobile-descriptions-description">
                <span>—</span> Dashboard
              </p>
              <p className="main_mobile-descriptions-description">
                <span>—</span> Месяц amoCRM
              </p>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Main;
