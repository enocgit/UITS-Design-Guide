/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import ExclamationCircleIcon from "./ExclamationCircleIcon";

export default function ComponentSubPage({ children, ...props }) {
  return (
    <>
      <div className="grid grid-cols-auto gap-2 h-96">
        <div
          className="flex items-center justify-center bg-[#177445] rounded-lg p-14 component-sub-head"
          // style={{ backgroundColor: props.backgroundColor }} bg-blue-50
        >
          <div>
            <h1
              className="font-bold text-6xl text-white text-center"
              // style={{ color: props.color }} text-neutrak-800
            >
              {props.heading}
            </h1>
            <p
              className="mt-2 text-xl text-white"
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

      <div className="my-20 mx-auto w-9/12">
        {props.subnote && (
          <div className="flex items-start gap-3">
            <ExclamationCircleIcon />
            <p className="mb-20 leading-[1.8] font-light">{props.subnote}</p>
          </div>
        )}
        {children}

        <div className="grid grid-cols-2 gap-2">
          <NavLink to={props.toPrev}>
            <div className="bg-green-100 rounded-lg p-8 hover:bg-blue-100">
              <p className="text-neutral-600">Previous</p>
              <h3 className="font-medium text-2xl mt-2 text-neutral-800">
                {props.prevName}
              </h3>
            </div>
          </NavLink>
          <NavLink to={props.toNext}>
            <div
              className="bg-green-100 rounded-lg p-8 hover:bg-blue-100"
              style={{ display: !props.toNext && "none" }}
            >
              <p className="text-neutral-600">Next</p>
              <h3 className="font-medium text-2xl mt-2 text-neutral-800">
                {props.nextName}
              </h3>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
