import React from "react";

const ThirdPart = () => {
  return (
    <div className=" bg-gradient-to-b from-light_blue to-medium_blue p-36">
      <h1 className="m-auto mb-12 py-16 text-5xl">Recent Reviews</h1>
      <div className="flex flex-row justify-center gap-48 ">
        <div className="flex flex-col items-center space-y-8">
          <p>@Ahmad_morze</p>
          <img
            className="h-40 w-40 rounded-full object-cover"
            src="src\assets\craig-mckay-jmURdhtm7Ng-unsplash.jpg"
            alt="ManIcon"
          />
          <p className="w-40  font-regular">Truly an exceptional experience</p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <p>@Jack_Jone</p>
          <img
            className="h-40 w-40 rounded-full object-cover"
            src="src\assets\vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg"
            alt="ManIcon"
          />
          <p className="w-40 font-regular">Unique UI, and easy to use</p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <p>@Emily122f</p>
          <img
            className="h-40 w-40 rounded-full object-cover"
            src="src\assets\stefan-stefancik-QXevDflbl8A-unsplash.jpg"
            alt="FemaleIcon"
          />
          <p className="w-40  font-regular">
            Fast, simple, I did not expect such app
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdPart;
