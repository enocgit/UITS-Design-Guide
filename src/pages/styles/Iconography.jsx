import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import HeroIconsSolidImg from "../../assets/images/icon/heroicons-solid.png";
import HeroIconsOutlineImg from "../../assets/images/icon/heroicons-outline.png";
import ComponentImage from "../../components/ComponentImage";

export default function Iconography() {
  return (
    <ComponentSubPage
      heading="Iconography"
      description="Guidelines on using icon effectively."
      subnote="Icons are a powerful visual tool that can help users understand content and actions without reading text. Our design system provides a library of icons to use consistently across our products. We employ Hero icons, a comprehensive library of visually impactful icons, to ensure consistency and clarity across our products."
      backgroundImage={HeroIconsOutlineImg}
      backgroundColor="#2e4650"
      color="white"
      backgroundPosition="center center"
      toPrev="/styles/color"
      toNext="/styles/typography"
      prevName="Color"
      nextName="Typography"
    >
      <ComponentSub
        heading="Solid"
        footnote="Icons with a solid fill that are used to represent actions or objects."
      >
        <ComponentImage
          image={HeroIconsSolidImg}
          // width="8rem"
          heading="Solid icons"
          clipDisplay="none"
        >
          <a
            href="https://heroicons.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Visit Heroicons
          </a>
        </ComponentImage>
      </ComponentSub>
      <ComponentSub
        heading="Outline icons"
        footnote="Icons with a thin outline that are used to represent objects or concepts."
      >
        <ComponentImage
          image={HeroIconsOutlineImg}
          // width="8rem"
          heading="Solid icons"
          clipDisplay="none"
        >
          <a
            href="https://heroicons.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Visit Heroicons
          </a>
        </ComponentImage>
      </ComponentSub>
      <Usage>
        <li>
          Indicate the presence of unread notifications, new messages, or new
          updates.
        </li>
        <li>
          Display the number of new messages, or the status of a task (e.g.
          completed, pending, or in progress).
        </li>
        <li>Don&apos;t use the same icons for different things</li>
      </Usage>
    </ComponentSubPage>
  );
}
