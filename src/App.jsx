import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 540;
  const isTablet = width <= 1024;

  return (
    <div className="container__outer">
      {!isMobile && (
        <>
          <img
            className="bgimg__purple"
            src="./img/purple-ball.svg"
            alt="purple-ball"
          />
          <img className="bgimg__red" src="./img/red-ball.svg" alt="red-ball" />
          <img
            className="bgimg__red-small"
            src="./img/small-red-ball.svg"
            alt="smallred-ball"
          />
          <div className="light__purple"></div>
          <div className="light__red"></div>
        </>
      )}
      <div className="wrapper">
        <Header isMobile={isMobile} isTablet={isTablet} />
        <Main isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </div>
    </div>
  );
}

export default App;
