import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import DualActionTagImg from "../../assets/images/Tag.png";
import CancelTagImg from "../../assets/images/tags/cancel.png";
import CheckTagImg from "../../assets/images/tags/check.png";

export default function Tags() {
  return (
    <ComponentSubPage
      heading="Tags"
      description=" Categorize or label content."
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      toPrev="/components/navigation"
      toNext="/components/togglers"
      prevName="Navigation"
      nextName="Togglers"
    >
      <ComponentSub
        heading="Check"
        image={CheckTagImg}
        width="8rem"
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      />
      <ComponentSub
        heading="Cancel"
        image={CancelTagImg}
        width="8rem"
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      />
      <ComponentSub
        heading="Dual action"
        image={DualActionTagImg}
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
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
