import ComponentSubPage from "../../components/ComponentSubPage";
import BadgeImg from "../../assets/images/badges/badge.png";
import BadgeTextImg from "../../assets/images/badges/badge-text.png";
import StatusColorsImg from "../../assets/images/badges/status-colors.png";
import ComponentSub from "../../components/ComponentSub";
import Usage from "../../components/Usage";
import BreadCrumbImg from "../../assets/images/navigation/breadcrumb.png";
import ComponentImage from "../../components/ComponentImage";
import ComponentClipBoard from "../../components/ComponentClipBoard";

export default function Bagdes() {
  return (
    <ComponentSubPage
      heading="Badges"
      description="Display status on an element."
      backgroundImage={BreadCrumbImg}
      backgroundColor="#a555df"
      color="#fff"
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
      {/* DEFAULT BADGES */}
      <ComponentSub
        footnote="Indicate the presence of an item or feature."
        heading="Default badges"
      >
        <ComponentImage heading="Default badges" image={BadgeImg} width="10rem">
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DEFAULT BADGES */}

      {/* DEFAULT BADGES WITH INNER TEXT */}
      <ComponentSub
        footnote="Display additional information or status about an item or feature."
        heading="Badges with inner text"
      >
        <ComponentImage heading="Badges with inner text" image={BadgeTextImg}>
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DEFAULT BADGES WITH INNER TEXT */}

      {/* STATUS COLORS */}
      <ComponentSub
        footnote="Provide visual cue of the status of an item."
        heading="Status colors"
      >
        <ComponentImage
          image={StatusColorsImg}
          width="8rem"
          heading="Status colors"
        >
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF STATUS COLORS */}

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
