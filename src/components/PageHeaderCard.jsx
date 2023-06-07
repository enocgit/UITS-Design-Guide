/* eslint-disable react/prop-types */
// import { Outlet } from "react-router-dom";

import PHCardOutlineSmall from "./PHCardOutlineSmall";

export default function PageHeaderCard({ children, ...props }) {
  return (
    <>
      <section
        className="rounded-3xl min-h-[50vh] xl:min-h-[50vh] py-10 sm2:py-28 px-2 flex items-center justify-center bg-no-repeat page-heroes"
        style={{
          backgroundColor: props.backgroundColor,
          marginBottom: props.marginBottom,
          // backgroundImage: props.backgroundImage,
          backgroundSize: props.backgroundSize,
          color: props.color,
        }}
      >
        {/* Container */}
        <div className="w-10/12 mx-auto flex flex-col gap-4 items-center">
          <h1
            className="text-center font-medium text-5xl sm2:text-8xl text-red-900"
            style={{ color: props.color }}
          >
            {props.heroTitle}
          </h1>
          <h5
            className="text-center text-base sm2:text-xl mx-auto text-red-900"
            style={{ color: props.subtitleColor || props.color }}
          >
            {props.heroSubtitle}
          </h5>
          {children}
        </div>
      </section>
      <PHCardOutlineSmall />
    </>
  );
}
