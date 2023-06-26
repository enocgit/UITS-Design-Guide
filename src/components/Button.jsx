import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Button({ buttonText, backgroundColor, color }) {
  return (
    <NavLink to="/get-started">
      <button
        className="rounded-xl px-8 py-4 text-base font-normal min-[550px]:text-2xl"
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        {buttonText}
      </button>
    </NavLink>
  );
}
