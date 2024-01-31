import React from "react";

const Button = (props) => {
  return (
    <div
      className="main-btn p-auto mx-auto my-2 flex h-12 w-80 cursor-pointer items-center 
    justify-center rounded-xl bg-light_blue text-center font-regular text-xs text-white 
    duration-100 hover:border-2 hover:border-medium_blue hover:bg-white hover:text-medium_blue"
    >
      {props.title}
    </div>
  );
};

export default Button;
