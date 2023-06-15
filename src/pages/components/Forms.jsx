import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import DisabledImg from "../../assets/images/forms/disabled.png";
import EnabledImg from "../../assets/images/forms/enabled.png";
import InputIconImg from "../../assets/images/forms/input-icon.png";
import FormsImg from "../../assets/images/Form.png";
import ComponentClipBoard from "../../components/ComponentClipBoard";
import ComponentImage from "../../components/ComponentImage";

export default function Forms() {
  return (
    <ComponentSubPage
      heading="Forms"
      description="Collect and submit user input."
      backgroundImage={FormsImg}
      backgroundColor="#b9b8b8"
      color="#fff"
      backgroundSize="30rem"
      subnote="Discover best practices for default input styling, incorporating disabled input functionality, and leveraging icons to enhance the usability and visual appeal of your form inputs."
      toPrev="/components/checkboxes"
      toNext="/components/links"
      prevName="Checkboxes"
      nextName="Links"
    >
      {/* DEFAULT FIELD */}
      <ComponentSub
        footnote="Accepts user input and can be used for various types of form elements such as name, email, password, and more."
        heading="Default"
      >
        <ComponentImage image={EnabledImg} width="30rem" heading="Default">
          <ComponentClipBoard
            name="Background color"
            propertyName="background-color"
            bgColorVal="#FFFFFF"
            value="#FFFFFF"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#A2A5B9"
            bgColorVal="#A2A5B9"
          />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="1px solid #D1D5DB"
            bgColorVal="#A2A5B9"
            borderColorVal="#D1D5DB"
          />
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
          <ComponentClipBoard
            name="Font size"
            propertyName="font-size"
            value="0.775rem"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DEFAULT FIELD */}

      {/* DISABLED FIELD */}
      <ComponentSub
        footnote=" Prevents user input and can be used to display information or to indicate that the input is not currently available for editing."
        heading="Disbaled field"
      >
        <ComponentImage
          image={DisabledImg}
          width="30rem"
          heading="Disbaled field"
        >
          <ComponentClipBoard
            name="Background color"
            propertyName="background-color"
            bgColorVal="#F9FAFB"
            value="#F9FAFB"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#A2A5B9"
            bgColorVal="#A2A5B9"
          />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="1px solid #D1D5DB"
            bgColorVal="#A2A5B9"
            borderColorVal="#D1D5DB"
          />
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
          <ComponentClipBoard
            name="Font size"
            propertyName="font-size"
            value="0.775rem"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DISABLED FIELD */}

      {/* FIELD WITH ICON */}
      <ComponentSub
        footnote="Provide a visual cue or hint to the user about the expected input or action."
        heading="Field with icon"
      >
        <ComponentImage
          image={InputIconImg}
          width="30rem"
          heading="Field with icon"
        >
          <ComponentClipBoard
            name="Background color"
            propertyName="background-color"
            bgColorVal="#F9FAFB"
            value="#F9FAFB"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#A2A5B9"
            bgColorVal="#A2A5B9"
          />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="1px solid #D1D5DB"
            bgColorVal="#A2A5B9"
            borderColorVal="#D1D5DB"
          />
          <ComponentClipBoard
            name="Border radius"
            propertyName="border-radius"
            value="0.375rem"
          />
          <ComponentClipBoard
            name="Font size"
            propertyName="font-size"
            value="0.775rem"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF FIELD WITH ICON */}

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
