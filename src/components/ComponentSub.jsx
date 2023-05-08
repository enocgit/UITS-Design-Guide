/* eslint-disable react/prop-types */

import { useState } from "react";
import ComponentModal from "./ComponentModal";

export default function ComponentSub(props) {
  const [show, setShow] = useState(false);

  function onClick() {
    setShow((prevShow) => !prevShow);
  }
  function onClose() {
    setShow(false);
  }
  return (
    <div onClick={props.handleClick}>
      <h2 className="font-medium text-2xl mb-5 text-neutral-800">
        {props.heading}
      </h2>
      <div className=" p-10 bg-blue-50 border border-neutral-300 rounded-lg flex items-center justify-center">
        <img
          src={props.image}
          alt=""
          className="w-96 hover:cursor-pointer"
          style={{ width: props.width }}
          onClick={onClick} // handled by parent
        />
      </div>
      <p className="mt-4 mb-20">{props.footnote}</p>
      <ComponentModal
        show={show}
        onClose={onClose} // handled by modal component
        heading={props.heading}
        hexValue={props.hexValue}
        bgColorClip={props.bgColorClip}
        marginValue={props.marginValue}
        borderRadiusValue={props.borderRadiusValue}
      />
    </div>
  );
}
