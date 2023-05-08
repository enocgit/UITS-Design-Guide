/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import React from "react";
import ClipboardIcon from "./ClipboardIcon";
// import ComponentClipBoard from "./ComponentClipBoard";
// import BorderRadiusClipboard from "./BorderRadiusClipboard";
// import MarginClipboard from "./MarginClipboard";

export default function ComponentModal({ children, ...props }) {
  return (
    <React.Fragment>
      {/* <Button onClick={props.onClick}>Toggle modal</Button> */}
      <Modal show={props.show} onClose={props.onClose} size="lg">
        <Modal.Header className="bg-blue-50">{props.heading}</Modal.Header>
        <Modal.Body className="bg-blue-50 relative">
          <div className="space-y-6">
            <ClipboardIcon
              top="1rem"
              right="2rem"
              handleCopyClick={props.handleCopyClick}
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
