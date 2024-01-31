import React from "react";
import LowerLinks from "./LowerLinks";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-12 bg-dark_blue pt-48 pb-2">
      <LowerLinks />
      <p className="font-thin italic ">Cweather 2024 - All rights Reverved</p>
    </div>
  );
};

export default Footer;
