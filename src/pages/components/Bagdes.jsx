import ComponentSubPage from "../../components/ComponentSubPage";
import BadgeImg from "../../assets/images/badges/badge.png";
import BadgeTextImg from "../../assets/images/badges/badge-text.png";
import StatusColorsImg from "../../assets/images/badges/status-colors.png";
import ComponentSub from "../../components/ComponentSub";
import Usage from "../../components/Usage";

export default function Bagdes() {
  return (
    <ComponentSubPage
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      toPrev="/components/alerts"
      toNext="/components/buttons"
      prevName="Alerts"
      nextName="Button"
    >
      <ComponentSub
        heading="Normal badges"
        image={BadgeImg}
        width="10rem"
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      />
      <ComponentSub
        heading="Badges with inner text"
        image={BadgeTextImg}
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      />
      <ComponentSub
        heading="Status colors"
        image={StatusColorsImg}
        width="8rem"
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
      </Usage>
    </ComponentSubPage>
  );
}
