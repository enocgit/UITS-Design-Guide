/* eslint-disable react/prop-types */
export default function OutlineMain({ children, ...props }) {
  return (
    <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
      <div className="order-2 mx-auto w-11/12 py-7 pl-2 min-[338px]:w-9/12 xl:order-1 xl:w-full xl:py-40 xl:pl-10">
        <h1 className="font-medium min-[230px]:text-2xl min-[550px]:text-3xl lg:text-5xl">
          {props.outlineHeading}
        </h1>
        {children}
      </div>
      <div
        className="top-0 order-1 mt-20 h-[70vh] rounded-3xl bg-slate-50 bg-contain bg-center bg-no-repeat xl:sticky xl:order-2 xl:mt-0 xl:h-screen"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      ></div>
    </div>
  );
}
