import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import LinkImg from "../../assets/images/Link.png";
// import ButtonLargeImg from "../../assets/images/buttons/large.png";

export default function Links() {
  return (
    <ComponentSubPage
      heading="Links"
      description="Navigate to another page or resource."
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      backgroundColor="#79bde3"
      color="#555"
      toPrev="/components/forms"
      toNext="/components/modals"
      prevName="Forms"
      nextName="Modals"
    >
      {/* DEFAULT */}
      <ComponentSub
        heading="Default"
        image={LinkImg}
        footnote="A clickable text element that navigates the user to another page or resource."
      ></ComponentSub>
      {/* END OF DEFAULT */}

      {/* GRADIENT */}
      <ComponentSub
        heading="Gradient"
        image={LinkImg}
        footnote="- A clickable text element with a gradient color scheme that can add visual interest to your design."
      ></ComponentSub>
      {/* END OF GRADEINT */}

      <Usage>
        <li>
          Navigation menus, Call-to-action (CTA) buttons, Links to social media
          profiles.
        </li>
        <li>
          Gradient: Hero sections, Call-to-action (CTA) buttons, Animated
          elements
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
