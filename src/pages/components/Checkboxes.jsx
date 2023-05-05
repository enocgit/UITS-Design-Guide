import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import CheckBoxImg from "../../assets/images/checkboxes/checkbox.png";
import RadioImg from "../../assets/images/checkboxes/radio.png";

export default function Checkboxes() {
  return (
    <ComponentSubPage
      heading="Checkboxes"
      description="Allow users to select one or multiple options."
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      toPrev="/components/cards"
      toNext="/components/forms"
      prevName="Cards"
      nextName="Forms"
    >
      <ComponentSub
        heading="Checkbox"
        image={CheckBoxImg}
        footnote="A form component used for selecting one or more options."
      />
      <ComponentSub
        heading="Radio"
        image={RadioImg}
        footnote="A form component used for selecting only one option from a group."
      />
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
