import { useRef } from "react";
import ClipboardIcon from "./ClipboardIcon";
import CopiedToast from "./CopiedToast";

/* eslint-disable react/prop-types */
export default function BorderRadiusClipboard(props) {
  const childRef = useRef(null);

  function handleClick() {
    navigator.clipboard.writeText(props.borderRadiusValue); // copies text to clipboard
    childRef.current.style.display = "block";
    setTimeout(() => {
      childRef.current.style.display = "none";
    }, 2000);
  }
  return (
    <div
      className="grid grid-cols-2 gap-2"
      style={{ display: !props.borderRadiusValue && "none" }}
    >
      <p className="font-semibold col-span-1">Border radius:</p>
      <div className="flex items-center gap-1 col-span-1">
        <div className="flex items-center hover:cursor-pointer gap-1 ml-3 relative">
          <p className="text-[#aaa]" onClick={handleClick}>
            {props.borderRadiusValue}
          </p>
          <ClipboardIcon />
          <CopiedToast ref={childRef} />
        </div>
      </div>
    </div>
  );
}
