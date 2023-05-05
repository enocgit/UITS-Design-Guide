/* eslint-disable react/prop-types */

import { Accordion } from "flowbite-react";

export default function AccordionParent({ children, ...props }) {
  return (
    <div style={{ marginTop: props.marginTop }}>
      <Accordion collapseAll={true}>
        <Accordion.Panel>
          <Accordion.Title>{props.title}</Accordion.Title>
          <Accordion.Content>
            <p className="font-light">{props.body}</p>
            <ul>{children}</ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
