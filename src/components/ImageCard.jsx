import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ImageCard(props) {
  return (
    <NavLink to={props.to} className="text-light">
      <div className="w-full rounded-3xl bg-neutral-100">
        <div
          className="bg-blue-50 bg-center bg-contain bg-no-repeat w-full h-48 rounded-3xl"
          style={{
            backgroundColor: props.backgroundColor,
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundSize: "22rem",
            height: props.bgHeight,
          }}
        ></div>
        <div className="p-5 rounded-3xl">
          <h3 className="font-medium text-2xl">{props.heading}</h3>
          <p className="mt-1" style={{ fontWeight: "400" }}>
            {props.bodyText}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
