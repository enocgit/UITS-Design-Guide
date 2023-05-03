import { useRef } from "react";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function OutlineMainOutlineCard({ children, ...props }) {
  const childRef = useRef(null);

  const handleMouseOver = () => {
    childRef.current.style.backgroundColor = "white";
    childRef.current.style.display = "flex";
    childRef.current.style.justfiyItems = "center";
    childRef.current.style.alignItems = "center";
    childRef.current.style.padding = "0.5rem";
    childRef.current.style.borderRadius = "80%";
  };
  const handleMouseOut = () => {
    childRef.current.style.backgroundColor = "initial";
    childRef.current.style.display = "initial";
    childRef.current.style.justfiyItems = "initial";
    childRef.current.style.alignItems = "initial";
    childRef.current.style.padding = "initial";
    childRef.current.style.borderRadius = "initial";
  };

  return (
    <NavLink to="">
      <div
        className="outline-parent bg-blue-50  hover:bg-blue-100 px-5 py-8 rounded-2xl mb-2 ml-2 flex gap-6"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div>
          <h2 className="text-2xl font-medium">{props.heading}</h2>
          <p className="pt-2" style={{ fontWeight: "400" }}>
            {props.bodyText}
          </p>
        </div>
        <div className="ml-auto outline-svg transition-all" ref={childRef}>
          {children}
        </div>
      </div>
    </NavLink>
  );
}
