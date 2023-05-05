import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import BreadCrumbImg from "../../assets/images/navigation/breadcrumb.png";
import RegularTextLinkImg from "../../assets/images/navigation/regular-text.png";

export default function Navigation() {
  return (
    <ComponentSubPage
      heading="Navigation"
      description="Provide links to different sections of an application.
"
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      toPrev="/components/modals"
      toNext="/components/tags"
      prevName="Modals"
      nextName="Tags"
    >
      <ComponentSub
        heading="Breadcrump"
        image={BreadCrumbImg}
        width="35rem"
        footnote="Show the user their current location within the website's hierarchy."
      />
      <ComponentSub
        heading="Regular text"
        image={RegularTextLinkImg}
        footnote="Used to highlight the active or selected page."
      />
      <ComponentSub
        heading="Regular text with border"
        image={RegularTextLinkImg}
        footnote="Used to highlight the active or selected page."
      />
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
