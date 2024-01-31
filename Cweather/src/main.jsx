import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/MainButton.jsx";
import SearchBox from "./components/SearchBox.jsx";
import BlueLayer from "./components/BlueLayer.jsx";
import SecondPart from "./components/SecondPart.jsx";
import ThirdPart from "./components/ThirdPart.jsx";
import FourthPart from "./components/FourthPart.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="navbar flex items-center justify-between gap-12 p-7">
      <img
        className="w-12"
        src="src/assets/weather_types/style/logo.svg"
        alt="cweather logo"
      />
      <SearchBox />
      <button className="focus:rotate-[-90deg] duration-150">
      <img
        className="w-8 opacity-45"
        src="src\assets\utilities\gear.png"
        alt="cweather logo"
      />
      </button>
    </div>

    <div className="main-container mt-24 flex flex-col items-center justify-center gap-12">
      <img
        className=""
        src="src/assets/weather_types/style/logo_big.svg"
        alt="cweather logo"
      />
      <div className="button-container">
        <Button title="Check Weather" />
        <p className="text-center font-regular text-light_blue">
          Current Location:{" "}
          <span className="text-black font-bold">Lebanon</span>
        </p>
      </div>
    </div>

    <BlueLayer />
    <SecondPart />
    <ThirdPart />
    <FourthPart />
    <Footer />

  </React.StrictMode>,
);
