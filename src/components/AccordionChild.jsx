/* eslint-disable react/prop-types */
import { Accordion } from "flowbite-react";

export default function MyAccordion({ children, ...props }) {
  return (
    <div style={{ marginTop: props.marginTop }}>
      <Accordion collapseAll={true}>
        <Accordion.Panel>
          <Accordion.Title>{props.title}</Accordion.Title>
          <Accordion.Content>
            <p className="font-light text-white">{props.body}</p>
            <ul className="">{children}</ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
