/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import ExclamationCircleIcon from "./ExclamationCircleIcon";

export default function ComponentSubPage({ children, ...props }) {
  return (
    <>
      <div className="grid-cols-auto grid h-56 gap-2 md:h-64 lg:h-96">
        <div
          className="component-sub-head flex items-center justify-center rounded-lg bg-[#177445] p-3 sm:p-14"
          // style={{ backgroundColor: props.backgroundColor }} bg-blue-50
        >
          <div>
            <h1
              className="text-left text-xl font-bold text-white min-[230px]:text-3xl min-[410px]:text-center min-[550px]:text-4xl lg:text-6xl"
              // style={{ color: props.color }} text-neutral-800
            >
              {props.heading}
            </h1>
            <p
              className="mt-2 text-sm text-white lg:text-xl"
              // style={{ color: props.color }} text-neutral-800
            >
              {props.description}
            </p>
          </div>
        </div>
        {/* <div
          className="bg-blue-50 rounded-lg bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundSize: props.backgroundSize,
            backgroundPosition: props.backgroundPosition,
          }}
        ></div> */}
      </div>

      <div className="mx-auto my-20 w-11/12 text-sm md:w-9/12 md:text-base">
        {props.subnote && (
          <div className="flex items-start gap-3">
            <ExclamationCircleIcon />
            <p className="mb-20 font-light leading-[1.8]">{props.subnote}</p>
          </div>
        )}
        {children}

        <div className="grid grid-cols-2 gap-2">
          <NavLink to={props.toPrev}>
            <div className="text-clip rounded-lg bg-green-100 p-3 hover:bg-blue-100 md:p-8">
              <p className="text-xs text-neutral-600 md:text-base">Previous</p>
              <h3 className="truncate text-clip text-lg font-medium capitalize text-neutral-800 md:mt-2 md:text-2xl">
                {props.prevName}
              </h3>
            </div>
          </NavLink>
          <NavLink to={props.toNext}>
            <div
              className="text-clip rounded-lg bg-green-100 p-3 hover:bg-blue-100 md:p-8"
              style={{ display: !props.toNext && "none" }}
            >
              <p className="text-xs text-neutral-600 md:text-base">Next</p>
              <h3 className="truncate text-clip text-lg font-medium capitalize text-neutral-800 md:mt-2 md:text-2xl">
                {props.nextName}
              </h3>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
