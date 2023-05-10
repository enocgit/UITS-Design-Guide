import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import DefaultModalImg from "../../assets/images/modals/default.png";
import PopupModalImg from "../../assets/images/modals/popup.png";
import LoginModalImg from "../../assets/images/modals/login.png";
import ComponentImage from "../../components/ComponentImage";
import ComponentClipBoard from "../../components/ComponentClipBoard";

export default function Modals() {
  return (
    <ComponentSubPage
      heading="Modals"
      description="Display content or require user action before continuing."
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      backgroundColor="#f2f2f2"
      // color="#fff"
      toPrev="/components/links"
      toNext="/components/navigation"
      prevName="Links"
      nextName="Navigation"
    >
      {/* DEFAULT MODAL */}
      <ComponentSub
        footnote="A modal that can be customized to display various types of content or actions."
        heading="Default modal"
      >
        <ComponentImage heading="Defailt modal" image={DefaultModalImg}>
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DEFAULT MODAL */}

      {/* POPUP MODAL */}
      <ComponentSub
        footnote="A modal that appears suddenly or unexpectedly, typically used to capture user's attention."
        heading="Popup modal"
      >
        <ComponentImage heading="Popup modal" image={PopupModalImg}>
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF POPUP MODAL */}

      {/* LOGIN MODAL */}
      <ComponentSub
        footnote="A modal specifically designed for users to log in to your web application."
        heading="Login modal"
      >
        <ComponentImage heading="Login modal" image={LoginModalImg}>
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF LOGIN MODAL */}

      <Usage>
        <li>
          Default modal: Displaying additional information, collecting user
          input, confirmation before performing an action.
        </li>
        <li>
          Pop-up modal: Displaying notifications, displaying error messages,
          promoting a call-to-action.
        </li>
        <li>
          Login modal: Restricting access to certain areas or features of your
          web application, providing a personalized user experience, keeping
          track of user activity.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
