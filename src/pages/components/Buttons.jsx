import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import ButtonSmallImg from "../../assets/images/buttons/small.png";
import ButtonLargeImg from "../../assets/images/buttons/large.png";
import ButtonIconImg from "../../assets/images/buttons/button-icon.png";

export default function Buttons() {
  return (
    <ComponentSubPage
      heading="Buttons"
      description="Trigger an action or navigate to another page."
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      backgroundColor="#82bfbd"
      toPrev="/components/badges"
      toNext="/components/cards"
      prevName="Badges"
      nextName="Cards"
    >
      <ComponentSub
        heading="Default button"
        image={ButtonSmallImg}
        width="10rem"
        footnote="A standard button for triggering an action or navigating to another page."
      />
      <ComponentSub
        heading="Button with icon"
        image={ButtonIconImg}
        width="10rem"
        footnote="A button with an icon to provide a visual cue of its purpose or to save space."
      />
      <ComponentSub
        heading="Large button"
        image={ButtonLargeImg}
        width="10rem"
        footnote="A button with increased size for emphasis or ease of use on touch devices.
"
      />
      <Usage>
        <li>
          Form submission, navigating to another page, triggering an action.
        </li>
        <li>Social media sharing, toggling menu items.</li>
        <li>
          Call-to-action buttons, mobile navigation, product purchase buttons.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
