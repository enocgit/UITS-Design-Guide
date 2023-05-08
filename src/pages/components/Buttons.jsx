/* eslint-disable react/prop-types */
import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import ButtonSmallImg from "../../assets/images/buttons/small.png";
import ButtonLargeImg from "../../assets/images/buttons/large.png";
import ButtonIconImg from "../../assets/images/buttons/button-icon.png";
import ComponentClipBoard from "../../components/ComponentClipBoard";

export default function Buttons() {
  return (
    <ComponentSubPage
      heading="Buttons"
      description="Trigger an action or navigate to another page."
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      backgroundColor="#82bfbd"
      color="#fbfbfb"
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
      >
        <ComponentClipBoard
          name="Color"
          propertyName="background-color"
          value="#CE5E5E"
          bgColorVal="#CE5E5E"
        />
        <ComponentClipBoard
          name="Border Radius"
          propertyName="border-radius"
          value="0.375rem"
        />
        <ComponentClipBoard
          name="Padding"
          propertyName="padding"
          value="0.5rem 1.5rem"
        />
        <ComponentClipBoard
          name="Font size"
          propertyName="font-size"
          value="0.875rem"
        />
        <ComponentClipBoard
          name="Font weight"
          propertyName="font-weight"
          value="500"
        />
      </ComponentSub>
      <ComponentSub
        heading="Button with icon"
        image={ButtonIconImg}
        width="10rem"
        footnote="A button with an icon to provide a visual cue of its purpose or to save space."
      >
        <ComponentClipBoard
          name="Color"
          propertyName="background-color"
          value="#00B998"
          bgColorVal="#00B998"
        />
        <ComponentClipBoard
          name="Border Radius"
          propertyName="border-radius"
          value="0.375rem"
        />
        <ComponentClipBoard
          name="Padding"
          propertyName="padding"
          value="0.5rem 1.5rem"
        />
        <ComponentClipBoard
          name="Font size"
          propertyName="font-size"
          value="0.875rem"
        />
        <ComponentClipBoard
          name="Font weight"
          propertyName="font-weight"
          value="500"
        />
        <ComponentClipBoard
          name="Display"
          propertyName="display"
          value="flex"
        />
        <ComponentClipBoard name="Gap" propertyName="gap" value="0.25rem" />
      </ComponentSub>
      <ComponentSub
        heading="Large button"
        image={ButtonLargeImg}
        width="10rem"
        footnote="A button with increased size for emphasis or ease of use on touch devices.
"
      >
        <ComponentClipBoard
          name="Color"
          propertyName="background-color"
          value="#00B998"
          bgColorVal="#00B998"
        />
        <ComponentClipBoard
          name="Border Radius"
          propertyName="border-radius"
          value="0.375rem"
        />
        <ComponentClipBoard
          name="Padding"
          propertyName="padding"
          value="0.5rem 1.5rem"
        />
        <ComponentClipBoard
          name="Font size"
          propertyName="font-size"
          value="0.875rem"
        />
        <ComponentClipBoard
          name="Font weight"
          propertyName="font-weight"
          value="400"
        />
      </ComponentSub>
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
