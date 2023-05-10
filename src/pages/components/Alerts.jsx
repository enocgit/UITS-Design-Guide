import AlertsInfoImg from "../../assets/images/alerts/info.png";
import AlertsSuccessImg from "../../assets/images/alerts/success.png";
import AlertsDangerImg from "../../assets/images/alerts/danger.png";
import AlertsWarningImg from "../../assets/images/alerts/warning.png";
import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";

export default function Alerts() {
  return (
    <ComponentSubPage
      heading="Alerts"
      description="Notify users about important information or events."
      // backgroundImage={FormsImg}
      // backgroundSize="30rem"
      backgroundColor="#d1fae5"
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      toPrev="/components"
      toNext="/components/badges"
      prevName="Components"
      nextName="Badges"
    >
      {/* INFO */}
      <ComponentSub
        heading="Info"
        image={AlertsInfoImg}
        footnote=" Provides important information to the user."
      ></ComponentSub>
      {/* END OF INFO */}

      {/* SUCCESS */}
      <ComponentSub
        heading="Success"
        image={AlertsSuccessImg}
        footnote="Indicates that an action has been completed successfully."
      ></ComponentSub>
      {/* END OF SUCCESS */}

      {/* DANGER */}
      <ComponentSub
        heading="Danger"
        image={AlertsDangerImg}
        footnote=" Indicates that an error or critical issue has occurred."
      ></ComponentSub>
      {/* END OF DANGER */}

      {/* WARNING  */}
      <ComponentSub
        heading="Warning"
        image={AlertsWarningImg}
        footnote="Warns the user of a potential problem or issue."
      ></ComponentSub>
      {/*  END OF WARNING */}

      <Usage>
        <li>
          Notify users of successful or failed actions, such as form submissions
          or account updates.
        </li>
        <li>
          Display system-wide alerts, such as maintenance notifications or
          service disruptions.
        </li>
        <li>
          Alert users to security concerns, such as password breaches or
          suspicious login attempts.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
