import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import EnabledImg from "../../assets/images/Toggler.png";
import EnabledTextImg from "../../assets/images/togglers/enabled-text.png";
import DisabledTextImg from "../../assets/images/togglers/disabled-text.png";
import DisabledImg from "../../assets/images/togglers/disabled.png";

export default function Togglers() {
  return (
    <ComponentSubPage
      heading="Togglers"
      description=" Enable or disable a setting or option."
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      backgroundColor="#dbd6e1"
      toPrev="/components/tags"
      prevName="tags"
    >
      <ComponentSub
        heading="Enabled"
        image={EnabledImg}
        width="8rem"
        footnote="Indicates that a feature or setting is currently turned on."
      />
      <ComponentSub
        heading="Enabled with text"
        image={EnabledTextImg}
        width="8rem"
        footnote="Explicitly states that a feature or setting is turned on."
      />
      <ComponentSub
        heading="Disabled"
        image={DisabledImg}
        width="8rem"
        footnote="Indicates that a feature or setting is currently turned off."
      />
      <ComponentSub
        heading="Disabled with text"
        image={DisabledTextImg}
        width="8rem"
        footnote="Explicitly states that a feature or setting is turned off."
      />
      <Usage>
        <li>Enable/Disable Dark Mode feature.</li>
        <li>Toggle between grid and list view for displaying content.</li>
        <li>Turn on/off push notifications.</li>
        <li>Enabling/Disabling Autoplay for videos or audio files.</li>
        <li>Show/Hide Password field in a login or sign up form.</li>
      </Usage>
    </ComponentSubPage>
  );
}
