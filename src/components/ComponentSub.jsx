/* eslint-disable react/prop-types */

export default function ComponentSub(props) {
  return (
    <>
      <h2 className="font-medium text-2xl mb-5 text-neutral-800">
        {props.heading}
      </h2>
      <div className="p-10 bg-blue-50 border border-neutral-300 rounded-lg flex items-center justify-center">
        <img
          src={props.image}
          alt=""
          className="w-96"
          style={{ width: props.width }}
        />
      </div>
      <p className="mt-4 mb-20">{props.footnote}</p>
    </>
  );
}
