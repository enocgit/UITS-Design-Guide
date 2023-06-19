/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import React, { Children, useRef } from "react";
import ClipboardIcon from "./ClipboardIcon";
import CopiedToast from "./CopiedToast";

export default function ComponentModal({ children, ...props }) {
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

  return (
    <React.Fragment>
      {/* <Button onClick={props.onClick}>Toggle modal</Button> */}
      <Modal show={props.show} onClose={props.onClose} size="3xl">
        <Modal.Header className="bg-blue-50">
          <span className="text-neutral-800">{props.heading}</span>
        </Modal.Header>
        <Modal.Body className="bg-blue-50 relative">
          <div className="space-y-6">
            <CopiedToast ref={childRef} />
            <ClipboardIcon
              top="1rem"
              right="2rem"
              handleCopyClick={handleCopyClick}
              display={props.clipDisplay}
            />
            <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex items-center justify-center">
              <div>
                {children}

                {/* <BorderRadiusClipboard
                  borderRadiusValue={props.borderRadiusValue}
                />
                <MarginClipboard marginValue={props.marginValue} /> */}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
