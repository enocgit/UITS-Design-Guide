// import { useState } from "react";
import { useRef } from "react";

/* eslint-disable react/prop-types */
export default function ComponentClipBoard(props) {
  // const [clipText, setClipText] = useState('')

  // const childRef = useRef(null);

  // function handleClick() {
  //   navigator.clipboard.writeText(props.value); // copies text to clipboard
  //   childRef.current.style.display = "block";
  //   setTimeout(() => {
  //     childRef.current.style.display = "none";
  //   }, 2000);
  // }
  return (
    <div
      className="grid grid-cols-4 mb-2"
      style={{ display: !props.value && "none" }}
    >
      <p className="font-semibold col-span-2">{props.name}</p>
      <span className="col-span-1 font-bold">:</span>
      <div className="flex items-center gap-1 col-span-1">
        <div
          className="w-4 h-4"
          style={{
            backgroundColor: props.value,
            color: props.colorVal,
            borderColor: props.borderColorVal,
            display: !props.value && "none",
          }}
        ></div>
        <div className="flex items-center hover:cursor-pointer gap-1 relative">
          <p className="text-[#aaa]" title="copy">
            {props.value}
          </p>
          {/* <ClipboardIcon /> */}
          {/* <CopiedToast ref={childRef} /> */}
        </div>
      </div>
    </div>
  );
}
