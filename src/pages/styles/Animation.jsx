import ComponentImage from "../../components/ComponentImage";
import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import TooltipImg from "../../assets/images/animation/tooltip.png";
import Spinner from "../../assets/images/animation/spinner.svg";
import ProgressBar from "../../assets/images/animation/Progress bar.svg";
import DropFileArea from "../../assets/images/animation/drop-file-area.png";

export default function Animation() {
  return (
    <ComponentSubPage
      heading="Animation and Interaction"
      description="Tips for adding engaging and effective animation and interaction to your application."
      subnote="Animation and interaction can greatly enhance the user experience by providing visual cues, feedback, and delight. However, it's important to use animation and interaction thoughtfully and purposefully, and not to overload the user with too much of it."
      // backgroundImage={HeroIconsOutlineImg}
      backgroundColor="#2e4650"
      color="white"
      backgroundPosition="center center"
      toPrev="/styles"
      toNext="/styles/color"
      prevName="Styles"
      nextName="Color"
    >
      <ComponentSub
        heading="Use animation to provide feedback"
        footnote="Animation can be used to communicate that an action has been completed, such as when a button has been clicked or a form has been submitted."
        gap="8rem"
      >
        <ComponentImage image={ProgressBar} width="20rem" heading="Solid icons">
          <p>Use animation to provide feedback</p>
        </ComponentImage>
        <ComponentImage image={Spinner} width="5rem" heading="Solid icons">
          <p>Use animation to provide feedback</p>
        </ComponentImage>
      </ComponentSub>
      <ComponentSub
        heading="Use interactions to guide the user"
        footnote="Interactions such as tooltips or hover effects can guide users and help them discover features or functionality."
      >
        <ComponentImage image={TooltipImg} width="10rem" heading="Solid icons">
          <p>Use interactions to guide the user</p>
        </ComponentImage>
      </ComponentSub>
      <ComponentSub
        heading="Use animation to establish context  "
        footnote="Animation can be used to transition between states, such as when a modal opens or closes, to establish context for the user."
      >
        <ComponentImage image="" width="10rem" heading="Solid icons">
          <p>Use animation to establish context</p>
        </ComponentImage>
      </ComponentSub>
      <ComponentSub
        heading="Use interactions to improve usability"
        footnote="Interactions such as drag and drop or swipe gestures can improve usability by making it easier for users to complete tasks. "
      >
        <ComponentImage
          image={DropFileArea}
          width="30rem"
          heading="Solid icons"
        >
          <p>Use interactions to improve usability </p>
        </ComponentImage>
      </ComponentSub>
      <ComponentSub
        heading="Use animation to improve visual hierarchy "
        footnote="Animation can be used to draw attention to important elements or to create a sense of visual hierarchy."
      >
        <ComponentImage image="" width="10rem" heading="Solid icons">
          <p>Use animation to improve visual hierarchy</p>
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
