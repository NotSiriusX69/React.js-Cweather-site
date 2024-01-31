import React from "react";
import Button from "./MainButton";

const JoinForm = () => {
  return (
    <div className="bg-form_blue flex w-3/6 flex-col gap-12 rounded-3xl p-12">
      <input type="text" placeholder="Enter Email" className="w-full px-3 py-2 rounded-xl" />
      <Button title="Join Now"></Button>
    </div>
  );
};

export default JoinForm;
