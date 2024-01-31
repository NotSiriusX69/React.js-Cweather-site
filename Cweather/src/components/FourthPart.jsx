import React from "react";
import JoinForm from "./JoinForm";
const FourthPart = () => {
  return (
    <div className="bg-gradient-to-b from-medium_blue to-dark_blue p-24">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="m-auto mb-12 py-2 text-5xl">Join our News Letter</h1>
        <JoinForm></JoinForm>
        <p className="font-regular">
          having issues?{" "}
          <a className="font-light underline hover:no-underline" href="">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
};

export default FourthPart;
