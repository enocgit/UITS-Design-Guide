import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import BreadCrumbImg from "../../assets/images/navigation/breadcrumb.png";
import RegularTextLinkImg from "../../assets/images/navigation/regular-text.png";
import ComponentImage from "../../components/ComponentImage";
import ComponentClipBoard from "../../components/ComponentClipBoard";

export default function Navigation() {
  return (
    <ComponentSubPage
      heading="Navigation"
      description="Provide links to different sections of an application.
"
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      backgroundColor="#43c3af"
      color="#fff"
      toPrev="/components/modals"
      toNext="/components/tags"
      prevName="Modals"
      nextName="Tags"
    >
      {/* BREADCRUMP */}
      <ComponentSub
        footnote="Show the user their current location within the website's hierarchy."
        heading="Breadcrump"
      >
        <ComponentImage
          heading="Breadcrump"
          image={BreadCrumbImg}
          width="35rem"
        >
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF BREADCRUMP */}

      {/* REGULAR TEXT */}
      <ComponentSub
        footnote="Used to highlight the active or selected page."
        heading="Regular text"
      >
        <ComponentImage heading="Regular text" image={RegularTextLinkImg}>
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF REGULAR TEXT */}

      {/* REGULAR TEXT WITH BORDER */}
      <ComponentSub
        footnote="Used to highlight the active or selected page."
        heading="Regular text with border"
      >
        <ComponentImage
          heading="Regular text with border"
          image={RegularTextLinkImg}
        >
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF REGULAR TEXT WITH BORDER */}

      <Usage>
        <li>Breadcrumb: Large informational websites, and multilevel menus.</li>
        <li>
          Regular text: Current page indicator, active menu item, and selected
          filter.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
