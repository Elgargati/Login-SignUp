import React from "react";

export default function ActionButton({
  label,
  activeAction,
  setAction,
  currentAction,
}) {
  const isActive = activeAction === currentAction;
  const bgColor = isActive
    ? "bg-[#eaeaea] text-[#084787]"
    : "bg-[#02002b] text-white";

  return (
    <button
      type="submit"
      className={`${bgColor} flex justify-center items-center w-1/2 2xl:w-full h-14 rounded-full font-bold text-lg cursor-pointer`}
      onClick={() => setAction(activeAction)}
    >
      {label}
    </button>
  );
}
