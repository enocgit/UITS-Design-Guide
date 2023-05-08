// import { useState } from "react";
import { useRef } from "react";
import ClipboardIcon from "./ClipboardIcon";
import CopiedToast from "./CopiedToast";

/* eslint-disable react/prop-types */
export default function ColorClipboard(props) {
  // const [clipText, setClipText] = useState('')

  const childRef = useRef(null);

  function handleClick() {
    navigator.clipboard.writeText(props.hexValue); // copies text to clipboard
    childRef.current.style.display = "block";
    setTimeout(() => {
      childRef.current.style.display = "none";
    }, 2000);
  }
  return (
    <div
      className="grid grid-cols-2 gap-2"
      style={{ display: !props.hexValue && "none" }}
    >
      <p className="font-semibold col-span-1">Color:</p>
      <div className="flex items-center gap-1 col-span-1 ml-3">
        <div
          className="w-4 h-4"
          style={{
            backgroundColor: props.bgColorClip,
            display: !props.bgColorClip && "none",
          }}
        ></div>
        <div className="flex items-center hover:cursor-pointer gap-1 relative">
          <p className="text-[#aaa]" onClick={handleClick}>
            {props.hexValue}
          </p>
          <ClipboardIcon />
          <CopiedToast ref={childRef} />
        </div>
      </div>
    </div>
  );
}
