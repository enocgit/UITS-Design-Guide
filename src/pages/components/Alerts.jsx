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
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      toPrev="/components"
      toNext="/components/badges"
      prevName="Components"
      nextName="Badges"
    >
      <ComponentSub
        heading="Info"
        image={AlertsInfoImg}
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      />
      <ComponentSub
        heading="Success"
        image={AlertsSuccessImg}
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      />
      <ComponentSub
        heading="Danger"
        image={AlertsDangerImg}
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      />
      <ComponentSub
        heading="Warning"
        image={AlertsWarningImg}
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      />
      <Usage>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
