/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import React from "react";
import ColorClipboard from "./ColorClipboard";
import BorderRadiusClipboard from "./BorderRadiusClipboard";
import MarginClipboard from "./MarginClipboard";

export default function ComponentModal(props) {
  // const [show, setShow] = useState(false);

  // function onClose() {
  //   setShow(false);
  // }
  return (
    <React.Fragment>
      {/* <Button onClick={props.onClick}>Toggle modal</Button> */}
      <Modal show={props.show} onClose={props.onClose} size="md">
        <Modal.Header>{props.heading}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex items-center justify-center">
              <div>
                <ColorClipboard
                  hexValue={props.hexValue}
                  bgColorClip={props.bgColorClip}
                />
                <BorderRadiusClipboard
                  borderRadiusValue={props.borderRadiusValue}
                />
                <MarginClipboard marginValue={props.marginValue} />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
