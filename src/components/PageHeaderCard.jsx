/* eslint-disable react/prop-types */
// import { Outlet } from "react-router-dom";

export default function PageHeaderCard({ children, ...props }) {
  return (
    <>
      <section
        className="page-heroes flex min-h-[50vh] items-center justify-center rounded-3xl bg-no-repeat px-2 py-10 min-[570px]:py-28 xl:min-h-[50vh]"
        style={{
          backgroundColor: props.backgroundColor,
          marginBottom: props.marginBottom,
          // backgroundImage: props.backgroundImage,
          backgroundSize: props.backgroundSize,
          color: props.color,
        }}
      >
        {/* Container */}
        <div className="mx-auto flex w-10/12 flex-col items-center gap-4">
          <h1
            className="text-center text-xl font-medium text-red-900 min-[230px]:text-3xl min-[550px]:text-5xl lg:text-8xl"
            style={{ color: props.color }}
          >
            {props.heroTitle}
          </h1>
          <h5
            className="mx-auto text-center text-base text-red-900 min-[570px]:text-xl"
            style={{ color: props.subtitleColor || props.color }}
          >
            {props.heroSubtitle}
          </h5>
          {children}
        </div>
      </section>
      {/* <PHCardOutlineSmall /> */}
    </>
  );
}
