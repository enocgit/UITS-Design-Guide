import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import DisabledImg from "../../assets/images/forms/disabled.png";
import EnabledImg from "../../assets/images/forms/enabled.png";
import InputIconImg from "../../assets/images/forms/input-icon.png";
import FormsImg from "../../assets/images/Form.png";

export default function Forms() {
  return (
    <ComponentSubPage
      heading="Forms"
      description="Collect and submit user input."
      backgroundImage={FormsImg}
      backgroundSize="30rem"
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      toPrev="/components/checkboxes"
      toNext="/components/links"
      prevName="Checkboxes"
      nextName="Links"
    >
      <ComponentSub
        heading="Default"
        image={EnabledImg}
        width="30rem"
        footnote="Accepts user input and can be used for various types of form elements such as name, email, password, and more."
      />
      <ComponentSub
        heading="Disbaled field"
        image={DisabledImg}
        width="30rem"
        footnote=" Prevents user input and can be used to display information or to indicate that the input is not currently available for editing."
      />
      <ComponentSub
        heading="Field with icon"
        image={InputIconImg}
        width="30rem"
        footnote="Provide a visual cue or hint to the user about the expected input or action."
      />
      <Usage>
        <li>
          Default input field: Login form, sign-up form, search bar, contact
          form.
        </li>
        <li>Disabled input field: Completed forms, view-only mode for data.</li>
        <li>
          Field with icon: Date selection, password input, email input, file
          upload.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
