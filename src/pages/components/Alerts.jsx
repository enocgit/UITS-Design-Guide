import AlertsWarningImg from "../../assets/images/alerts/warning.png";
import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import ComponentImage from "../../components/ComponentImage";
import ComponentClipBoard from "../../components/ComponentClipBoard";
import InfoDefaultImg from "../../assets/images/alerts/info-default.svg";
import InfoLightImg from "../../assets/images/alerts/info-light.svg";
import InfoBorderImg from "../../assets/images/alerts/info-border.svg";
import InfoBorderTopImg from "../../assets/images/alerts/info-border-top.svg";
import InfoBorderLeftImg from "../../assets/images/alerts/info-border-left.svg";
import SuccessDefaultImg from "../../assets/images/alerts/success-default.svg";
import SuccessLightImg from "../../assets/images/alerts/success-light.svg";
import SuccessBorderImg from "../../assets/images/alerts/success-border.svg";
import SuccessBorderTopImg from "../../assets/images/alerts/success-border-top.svg";
import SuccessBorderLeftImg from "../../assets/images/alerts/success-border-left.svg";
import DangerDefaultImg from "../../assets/images/alerts/danger-default.svg";
import DangerLightImg from "../../assets/images/alerts/danger-light.svg";
import DangerBorderImg from "../../assets/images/alerts/danger-border.svg";
import DangerBorderTopImg from "../../assets/images/alerts/danger-border-top.svg";
import DangerBorderLeftImg from "../../assets/images/alerts/danger-border-left.svg";
import WarningDefaultImg from "../../assets/images/alerts/warning-default.svg";
import WarningLightImg from "../../assets/images/alerts/warning-light.svg";
import WarningBorderImg from "../../assets/images/alerts/warning-border.svg";
import WarningBorderTopImg from "../../assets/images/alerts/warning-border-top.svg";
import WarningBorderLeftImg from "../../assets/images/alerts/warning-border-left.svg";

export default function Alerts() {
  return (
    <ComponentSubPage
      heading="Alerts"
      description="Notify users about important information or events."
      // backgroundImage={FormsImg}
      // backgroundSize="30rem"
      backgroundColor="#d1fae5"
      subnote="Enhance user experience and convey important messages effectively with our versatile Alert components. From informative updates to success notifications, warnings, and critical alerts, our design guide provides guidance on creating impactful alerts for applications."
      toPrev="/components"
      toNext="/components/badges"
      prevName="Components"
      nextName="Badges"
    >
      {/* INFO */}
      <ComponentSub
        heading="Info"
        footnote=" Provides important information to the user."
      >
        <ComponentImage
          image={InfoDefaultImg}
          width="30rem"
          heading="Default Info Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#0284C7"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFFFF"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={InfoLightImg}
          width="30rem"
          heading="Info Light Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#E0F2FE"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={InfoBorderImg}
          width="30rem"
          heading="Info Border Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="transparent"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="1px solid #0284c7"
            bgColorVal="#0284C7"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={InfoBorderLeftImg}
          width="30rem"
          heading="Info Border Left Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#E0f2FE"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Left"
            propertyName="border-left"
            value="2px solid #0284c7"
            bgColorVal="#0284C7"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={InfoBorderTopImg}
          width="30rem"
          heading="Info Border Top Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#E0f2FE"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Top"
            propertyName="border-top"
            value="2px solid #0284c7"
            bgColorVal="#0284C7"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF INFO */}

      {/* SUCCESS */}
      <ComponentSub
        heading="Success"
        footnote="Indicates that an action has been completed successfully."
      >
        <ComponentImage
          image={SuccessDefaultImg}
          width="30rem"
          heading="Default Success Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#059669"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFFFF"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={SuccessLightImg}
          width="30rem"
          heading="Success Light Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#D1FAE5"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
            bgColorVal="#424242"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={SuccessBorderImg}
          width="30rem"
          heading="Success Border Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="transparent"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="1px solid #059669"
            bgColorVal="#059669"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={SuccessBorderLeftImg}
          width="30rem"
          heading="Success Border Left Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#D1FAE5"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Left"
            propertyName="border-left"
            value="2px solid #059669"
            bgColorVal="#059669"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={SuccessBorderTopImg}
          width="30rem"
          heading="Success Border Top Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#D1FAE5"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Top"
            propertyName="border-top"
            value="2px solid #059669"
            bgColorVal="#059669"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF SUCCESS */}

      {/* DANGER */}
      <ComponentSub
        heading="Danger"
        footnote=" Indicates that an error or critical issue has occurred."
      >
        <ComponentImage
          image={DangerDefaultImg}
          width="30rem"
          heading="Default Danger Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#E11D48"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFFFF"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={DangerLightImg}
          width="30rem"
          heading="Danger Light Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#FFE4E6"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={DangerBorderImg}
          width="30rem"
          heading="Danger Border Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="transparent"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="1px solid #E11D48"
            bgColorVal="#E11D48"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={DangerBorderLeftImg}
          width="30rem"
          heading="Danger Border Left Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#FFE4E6"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Left"
            propertyName="border-left"
            value="2px solid #E11D48"
            bgColorVal="#E11D48"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={DangerBorderTopImg}
          width="30rem"
          heading="Danger Border Top Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#FFE4E6"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Top"
            propertyName="border-top"
            value="2px solid #E11D48"
            bgColorVal="#E11D48"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DANGER */}

      {/* WARNING  */}
      <ComponentSub
        heading="Warning"
        image={AlertsWarningImg}
        footnote="Warns the user of a potential problem or issue."
      >
        <ComponentImage
          image={WarningDefaultImg}
          width="30rem"
          heading="Default Warning Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#EA580C"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFFFF"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={WarningLightImg}
          width="30rem"
          heading="Warning Light Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#FFEDD5"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={WarningBorderImg}
          width="30rem"
          heading="Warning Border Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="transparent"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="1px solid #EA580C"
            bgColorVal="#EA580C"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={WarningBorderLeftImg}
          width="30rem"
          heading="Warning Border Left Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#FFEDD5"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Left"
            propertyName="border-left"
            value="2px solid #EA580C"
            bgColorVal="#EA580C"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
        <ComponentImage
          image={WarningBorderTopImg}
          width="30rem"
          heading="Warning Border Top Alert"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#FFEDD5"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
          <ComponentClipBoard
            name="Border Top"
            propertyName="border-top"
            value="2px solid #EA580C"
            bgColorVal="#EA580C"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="4px"
          />
        </ComponentImage>
      </ComponentSub>
      {/*  END OF WARNING */}

      <Usage>
        <li>
          Notify users of successful or failed actions, such as form submissions
          or account updates.
        </li>
        <li>
          Display system-wide alerts, such as maintenance notifications or
          service disruptions.
        </li>
        <li>
          Alert users to security concerns, such as password breaches or
          suspicious login attempts.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
