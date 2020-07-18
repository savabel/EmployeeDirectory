import React from "react";
import MainPage from "./MainPage.js";

function MainFrame() {
  return (
    <>
      <div className="jumbotron text-center">
        <h1>Employee Directory</h1>
      </div>
      <div className="container">
        <MainPage />
      </div>
      <footer className="text-center">Abel J-M S</footer>
    </>
  );
}

export default MainFrame;
