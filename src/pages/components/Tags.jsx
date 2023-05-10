import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import DualActionTagImg from "../../assets/images/Tag.png";
import CancelTagImg from "../../assets/images/tags/cancel.png";
import CheckTagImg from "../../assets/images/tags/check.png";
import ComponentImage from "../../components/ComponentImage";
import ComponentClipBoard from "../../components/ComponentClipBoard";

export default function Tags() {
  return (
    <ComponentSubPage
      heading="Tags"
      description=" Categorize or label content."
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      backgroundColor="#f5f3f7"
      toPrev="/components/navigation"
      toNext="/components/togglers"
      prevName="Navigation"
      nextName="Togglers"
    >
      {/* CHECK */}
      <ComponentSub
        heading="Check"
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      >
        <ComponentImage image={CheckTagImg} width="8rem" heading="Check">
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF CHECK */}

      {/* CANCEL */}
      <ComponentSub
        heading="Cancel"
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      >
        <ComponentImage heading="Cancel" image={CancelTagImg} width="8rem">
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF CANCEL */}

      {/* DUAL ACTION */}
      <ComponentSub
        heading="Dual action"
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      >
        <ComponentImage
          heading="Dual action"
          image={DualActionTagImg}
          width="8rem"
        >
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DUAL ACTION */}
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
