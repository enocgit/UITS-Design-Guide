import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import ColorbgImg from "../../assets/images/color/alert.png";
import BrandColorsImg from "../../assets/images/color/brand-colors.png";
import BrandShadeImg from "../../assets/images/color/brand-shade.png";
import GrayscaleImg from "../../assets/images/color/grayscale.png";
import Usage from "../../components/Usage";

export default function Color() {
  return (
    <ComponentSubPage
      heading="Badges"
      description="Display additional information or status on an element."
      backgroundImage={ColorbgImg}
      backgroundPosition="right 20rem center"
      // backgroundSize="30rem"
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      toPrev="/components/alerts"
      toNext="/components/buttons"
      prevName="Alerts"
      nextName="Buttons"
    >
      <ComponentSub
        heading="Brand colors"
        image={BrandColorsImg}
        width="10rem"
        footnote="Indicate the presence of an item or feature."
      />
      <ComponentSub
        heading="Shade"
        image={BrandShadeImg}
        footnote="Display additional information or status about an item or feature."
      />
      <ComponentSub
        heading="Grayscale"
        image={GrayscaleImg}
        width="8rem"
        footnote="Provide visual cue of the status of an item."
      />
      <Usage>
        <li>
          Indicate the presence of unread notifications, new messages, or new
          updates.
        </li>
        <li>
          Display the number of new messages, or the status of a task (e.g.
          completed, pending, or in progress).
        </li>
        <li>
          Use a combination of default and badge with inner text to indicate the
          presence of new items or features along with additional information or
          status.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
