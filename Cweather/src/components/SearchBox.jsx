import React from "react";

const search_box = () => {
  return (
    <div className="flex ">
      <input
        type="text"
        placeholder="Search for location"
        className="search_box flex h-8 rounded-xl px-4 focus:border-medium_blue"
      ></input>
      <button>
        <img
          className="relative right-7 w-4 object-contain opacity-65 hover:opacity-100"
          src="src\assets\utilities\search.png"
          alt="search_icon"
        />
      </button>
    </div>
  );
};

export default search_box;
