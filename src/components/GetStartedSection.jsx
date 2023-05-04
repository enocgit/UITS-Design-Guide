/* eslint-disable react/prop-types */
import OutlineMain from "./OutlineMain";

export default function GetStartedSection({ children, ...props }) {
  return (
    <section className="m-2 min-h-screen">
      <OutlineMain
        outlineHeading={props.outlineHeading}
        backgroundImage={props.backgroundImage}
      >
        {children}
      </OutlineMain>
    </section>
  );
}
