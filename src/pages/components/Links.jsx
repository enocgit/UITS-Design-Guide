import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import DefaultLinkImg from "../../assets/images/links/default-link.png";
import GradientLinkImg from "../../assets/images/links/gradient-link.png";
import ComponentImage from "../../components/ComponentImage";
import ComponentClipBoard from "../../components/ComponentClipBoard";
// import ButtonLargeImg from "../../assets/images/buttons/large.png";

export default function Links() {
  return (
    <ComponentSubPage
      heading="Links"
      description="Navigate to another page or resource."
      subnote="The Link Components section of our design guide offers valuable guidance on link colors and styling, and recommended practices for links in your web apps."
      backgroundColor="#79bde3"
      color="#fff"
      toPrev="/components/forms"
      toNext="/components/modals"
      prevName="Forms"
      nextName="Modals"
    >
      {/* DEFAULT */}
      <ComponentSub
        heading="Default"
        image={DefaultLinkImg}
        footnote="A clickable text element that navigates the user to another page or resource."
      >
        <ComponentImage image={DefaultLinkImg} width="9rem" heading="Default">
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            bgColorVal="#0284C7"
            value="#0284C7"
          />
          <ComponentClipBoard
            name="Text Decoration"
            propertyName="text-decoration"
            value="underline"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DEFAULT */}

      {/* GRADIENT */}
      <ComponentSub
        heading="Gradient"
        image={GradientLinkImg}
        footnote="A clickable text element with a gradient color scheme that can add visual interest to your design."
      >
        <ComponentImage image={GradientLinkImg} width="10rem" heading="Default">
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            bgColorVal="#1A15D3"
            value="#1A15D3"
          />
          <ComponentClipBoard
            name="Text Decoration"
            propertyName="text-decoration"
            value="underline"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF GRADEINT */}

      <Usage>
        <li>
          Navigation menus, Call-to-action (CTA) buttons, Links to social media
          profiles.
        </li>
        <li>
          Gradient: Hero sections, Call-to-action (CTA) buttons, Animated
          elements
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
