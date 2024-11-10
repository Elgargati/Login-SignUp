import React, { useState } from "react";

import user_icon from "../Assests/user.png";
import password_icon from "../Assests/padlock.png";
import Inputs from "./Inputs";
import email_icon from "../Assests/email.png";
import LostPassword from "./LostPassword";
import ActionButton from "./actionBtn";

export default function LoginSignUp() {
  const [action, SetAction] = useState("Sign Up");
  const handleSetAction = (value) => {
    SetAction(value);
  };
  return (
    <div className="overflow-hidden  ">
      <div className="flex flex-col bg-slate-300  mt-10 pb-14 rounded-xl lg:w-1/3 2xl:mx-auto lg:mx-auto md:mx-24 mx-6">
        <h1 className="text-[#02002b] text-4xl font-bold m-auto my-8">
          {action}
        </h1>
        <div className="flex flex-col gap-4 mx-4 md:mx-4">
          {action === "Sign Up" && (
            <Inputs icon={user_icon} type={"text"} placeHolder={"Name"} />
          )}
          <Inputs icon={email_icon} type={"email"} placeHolder={"Email Id"} />
          <Inputs
            icon={password_icon}
            type={"password"}
            placeHolder={"Password"}
          />

          {action === "Login" && <LostPassword />}

          <div className="flex gap-8 ">
            <ActionButton
              label="Sign Up "
              activeAction="Sign Up"
              setAction={handleSetAction}
              currentAction={action}
            />
            <ActionButton
              label="Login"
              activeAction="Login"
              setAction={handleSetAction}
              currentAction={action}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
