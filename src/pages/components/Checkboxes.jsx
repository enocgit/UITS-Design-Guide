import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import CheckBoxImg from "../../assets/images/checkboxes/checkbox.png";
import RadioImg from "../../assets/images/checkboxes/radio.png";
import ComponentImage from "../../components/ComponentImage";
import ComponentClipBoard from "../../components/ComponentClipBoard";

export default function Checkboxes() {
  return (
    <ComponentSubPage
      heading="Checkboxes"
      description="Allow users to select one or multiple options."
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      backgroundColor="#e86e87"
      color="#fff"
      toPrev="/components/cards"
      toNext="/components/forms"
      prevName="Cards"
      nextName="Forms"
    >
      {/* CHECKBOX */}
      <ComponentSub
        footnote="A form component used for selecting one or more options."
        heading="Checkbox"
      >
        <ComponentImage heading="Checkbox" image={CheckBoxImg}>
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF CHECKBOX */}

      {/* RADIO */}
      <ComponentSub
        footnote="A form component used for selecting only one option from a group."
        heading="Radio"
      >
        <ComponentImage heading="Radio" image={RadioImg}>
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF RADIO */}
      <Usage>
        <li>
          Checkbox: Selecting items for purchase, subscribing to a newsletter,
          filtering search results.
        </li>
        <li>
          Radio: Selecting a payment method, selecting a language preference.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
