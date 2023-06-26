/* eslint-disable react/prop-types */

export default function Usage({ children }) {
  return (
    <div className="mx-auto w-10/12 md:w-9/12">
      <h1 className="mb-8 font-medium text-neutral-800 min-[230px]:text-3xl min-[550px]:text-4xl lg:text-5xl">
        Usage
      </h1>
      <ul
        className="mb-20 list-disc space-y-4 text-sm md:text-base"
        style={{ listStyleImage: "url('/ArrowCircleRight.svg')" }}
      >
        {children}
      </ul>
    </div>
  );
}
