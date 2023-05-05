import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import HeroIconsSolidImg from "../../assets/images/icon/heroicons-solid.png";
import HeroIconsOutlineImg from "../../assets/images/icon/heroicons-outline.png";

export default function Iconography() {
  return (
    <ComponentSubPage
      heading="Iconography"
      description="Guidelines on using icon effectively."
      backgroundImage={HeroIconsOutlineImg}
      backgroundColor="#262722"
      color="white"
      backgroundPosition="center center"
      toPrev="/styles/color"
      toNext="/styles/typography"
      prevName="Color"
      nextName="Typography"
    >
      <ComponentSub
        heading="Solid"
        image={HeroIconsSolidImg}
        footnote="Icons with a solid fill that are used to represent actions or objects."
      />
      <ComponentSub
        heading="Outline"
        image={HeroIconsOutlineImg}
        footnote="Icons with a thin outline that are used to represent objects or concepts."
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
        <li>Don&apos;t use the same icons for different things</li>
      </Usage>
    </ComponentSubPage>
  );
}
