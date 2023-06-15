import { Children, useRef, useState } from "react";
import ComponentModal from "./ComponentModal";

/* eslint-disable react/prop-types */
export default function ComponentImage({ children, ...props }) {
  const [show, setShow] = useState(false);

  const childRef = useRef(null);
  // Function to handle clipboard content
  const handleCopyClick = () => {
    const compschildren = Children.toArray(children); // stores all child of the particular ComponentSub
    const finalCopyArray = [];
    let finalCopyString = "";
    compschildren.map((child) => {
      finalCopyArray.push(`${child.props.propertyName}: ${child.props.value};`);
      navigator.clipboard.writeText(
        `${child.props.propertyName}: ${child.props.value};`
      );
    });
    finalCopyArray.forEach((clipcontent) => {
      finalCopyString += `${clipcontent}\n`;
    });
    navigator.clipboard.writeText(finalCopyString); // stores value in clipboard

    childRef.current.style.display = "block";
    setTimeout(() => {
      childRef.current.style.display = "none";
    }, 2000);
  };

  function onClick() {
    setShow((prevShow) => !prevShow);
  }
  function onClose() {
    setShow(false);
  }
  return (
    <>
      <img
        src={props.image}
        alt=""
        className="w-96 hover:cursor-pointer"
        style={{ width: props.width, display: !props.image && "none" }}
        onClick={onClick} // handled by parent
      />
      <ComponentModal
        show={show}
        onClose={onClose} // handled by modal component
        heading={props.heading}
        handleCopyClick={handleCopyClick}
        clipDisplay={props.clipDisplay}
      >
        {children}
      </ComponentModal>
    </>
  );
}
