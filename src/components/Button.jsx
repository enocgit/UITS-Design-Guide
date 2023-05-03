import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Button({ buttonText, backgroundColor, color }) {
  return (
    <NavLink to="/get-started">
      <button
        className="px-8 py-4 font-normal text-2xl rounded-xl"
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        {buttonText}
      </button>
    </NavLink>
  );
}
