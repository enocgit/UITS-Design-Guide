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
    <NavLink
      to={props.to}
      target={props.target}
      className="text-light tooltip-info tooltip tooltip-bottom w-full sm:tooltip-right"
      data-tip={props.tooltip}
    >
      <div
        className="w-full rounded-3xl bg-[#fcfcfc] transition-all"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className="h-48 w-full rounded-3xl bg-blue-50 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundColor: props.backgroundColor,
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundPosition: props.backgroundPosition,
            backgroundSize: props.backgroundSize,
            height: props.bgHeight,
          }}
        ></div>
        <div className="rounded-3xl p-5">
          <h3 className="text-left text-lg font-medium text-neutral-800 lg:text-2xl">
            {props.heading}
          </h3>
          <p
            className="mt-1 text-left text-sm md:text-base"
            style={{ fontWeight: "400" }}
          >
            {props.bodyText}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
