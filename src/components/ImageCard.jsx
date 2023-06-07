import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ImageCard(props) {
  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "#fafafa";
  };
  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "#fcfcfc";
  };

  return (
    <NavLink to={props.to} className="text-light">
      <div
        className="w-full rounded-3xl bg-[#fcfcfc] transition-all"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className="bg-blue-50 bg-center bg-contain bg-no-repeat w-full h-48 rounded-3xl"
          style={{
            backgroundColor: props.backgroundColor,
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundPosition: props.backgroundPosition,
            backgroundSize: props.backgroundSize,
            height: props.bgHeight,
            width: props.width,
          }}
        ></div>
        <div className="p-5 rounded-3xl">
          <h3 className="font-medium text-2xl text-neutral-800">
            {props.heading}
          </h3>
          <p className="mt-1" style={{ fontWeight: "400" }}>
            {props.bodyText}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
