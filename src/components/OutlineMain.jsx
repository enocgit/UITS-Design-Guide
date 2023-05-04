/* eslint-disable react/prop-types */
export default function OutlineMain({ children, ...props }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
      <div className="py-7 xl:py-40 pl-2 xl:pl-10 order-2 xl:order-1 w-9/12 mx-auto xl:w-full">
        <h1 className="text-5xl font-medium">{props.outlineHeading}</h1>
        {children}
      </div>
      <div
        className="xl:sticky top-0 rounded-3xl h-[70vh] xl:h-screen bg-slate-50 bg-center bg-contain bg-no-repeat order-1 mt-40 xl:mt-0 xl:order-2"
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
      ></div>
    </div>
  );
}
