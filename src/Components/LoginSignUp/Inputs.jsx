import React from "react";

export default function Inputs({ icon, type, placeHolder }) {
  return (
    <>
      <div className="flex items-center h-16 bg-[#eaeaea] rounded-full border border-sky-500">
        <img src={icon} alt="email" className="mx-8 w-7" />
        <input
          type={type}
          placeholder={placeHolder}
          className="bg-transparent border-none outline-none text-[#084787] text-lg"
        />
      </div>
    </>
  );
}
