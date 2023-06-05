import ComponentSubPage from "../../components/ComponentSubPage";
import BadgeTextImg from "../../assets/images/badges/badge-text.png";
import StatusColorsImg from "../../assets/images/badges/status-colors.png";
import ComponentSub from "../../components/ComponentSub";
import Usage from "../../components/Usage";
import BreadCrumbImg from "../../assets/images/navigation/breadcrumb.png";
import ComponentImage from "../../components/ComponentImage";
import ComponentClipBoard from "../../components/ComponentClipBoard";
import BadgeNotif1 from "../../assets/images/badges/badge-notification.png";
import BadgeNotif3 from "../../assets/images/badges/badge-notification-3.svg";
import BadgeNotifText from "../../assets/images/badges/badge-notification-text.svg";
import BadgeTextImg1 from "../../assets/images/badges/badge-text-1.svg";
import BadgeTextImg2 from "../../assets/images/badges/badge-text-2.png";
import BadgeTextImg3 from "../../assets/images/badges/badge-text-3.svg";
import StatusSuccessImg from "../../assets/images/badges/success.svg";
import StatusErrorImg from "../../assets/images/badges/error.svg";
import StatusWarningImg from "../../assets/images/badges/warning.svg";
import StatusProcessingImg from "../../assets/images/badges/processing.svg";

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
        flexDirection="column"
        alignItems="flex-start"
        gap="3rem"
      >
        <ComponentImage
          image={BadgeNotif3}
          width="5rem"
          heading="Default Badge"
        >
          <ComponentClipBoard
            name="Height"
            propertyName="height"
            value="12px"
          />
          <ComponentClipBoard name="Width" propertyName="width" value="12px" />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="2px solid #FFFFFF"
            bgColorVal="#FFFFFF"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="100%"
          />
        </ComponentImage>
        <ComponentImage
          image={BadgeNotif1}
          width="4rem"
          heading="Default Badge"
        >
          <ComponentClipBoard
            name="Height"
            propertyName="height"
            value="12px"
          />
          <ComponentClipBoard name="Width" propertyName="width" value="12px" />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="2px solid #FFFFFF"
            bgColorVal="#FFFFFF"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="100%"
          />
        </ComponentImage>{" "}
        <ComponentImage
          image={BadgeNotifText}
          width="5rem"
          heading="Text Badge"
        >
          <ComponentClipBoard
            name="Height"
            propertyName="height"
            value="12px"
          />
          <ComponentClipBoard name="Width" propertyName="width" value="12px" />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="100%"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DEFAULT BADGES */}

      {/* DEFAULT BADGES WITH INNER TEXT */}
      <ComponentSub
        footnote="Display additional information or status about an item or feature."
        heading="Badges with inner text"
        flexDirection="column"
        alignItems="flex-start"
        gap="3rem"
      >
        <ComponentImage
          image={BadgeTextImg1}
          width="5rem"
          heading="Badge inner text"
        >
          <ComponentClipBoard
            name="Height"
            propertyName="height"
            value="16px"
          />
          <ComponentClipBoard name="Width" propertyName="width" value="16px" />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="2px solid #FFFFFF"
            bgColorVal="#FFFFFF"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="100%"
          />{" "}
          <ComponentClipBoard
            name="Display"
            propertyName="display"
            value="flex"
          />{" "}
          <ComponentClipBoard
            name="Justify Content"
            propertyName="justify-content"
            value="center"
          />
          <ComponentClipBoard
            name="Aligh Items"
            propertyName="align-items"
            value="center"
          />
          <ComponentClipBoard
            name="Font Size"
            propertyName="font-size"
            value="16px"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFFFF"
          />
        </ComponentImage>{" "}
        <ComponentImage
          image={BadgeTextImg2}
          width="4rem"
          heading="Badge inner text"
        >
          <ComponentClipBoard
            name="Height"
            propertyName="height"
            value="16px"
          />
          <ComponentClipBoard name="Width" propertyName="width" value="16px" />
          <ComponentClipBoard
            name="Border"
            propertyName="border"
            value="2px solid #FFFFFF"
            bgColorVal="#FFFFFF"
          />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="100%"
          />{" "}
          <ComponentClipBoard
            name="Display"
            propertyName="display"
            value="flex"
          />{" "}
          <ComponentClipBoard
            name="Justify Content"
            propertyName="justify-content"
            value="center"
          />
          <ComponentClipBoard
            name="Aligh Items"
            propertyName="align-items"
            value="center"
          />
          <ComponentClipBoard
            name="Font Size"
            propertyName="font-size"
            value="16px"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFFFF"
          />
        </ComponentImage>
        <ComponentImage
          image={BadgeTextImg3}
          width="5rem"
          heading="Badge inner text"
        >
          <ComponentClipBoard
            name="Height"
            propertyName="height"
            value="16px"
          />
          <ComponentClipBoard name="Width" propertyName="width" value="16px" />
          <ComponentClipBoard
            name="Border Radius"
            propertyName="border-radius"
            value="100%"
          />{" "}
          <ComponentClipBoard
            name="Display"
            propertyName="display"
            value="flex"
          />{" "}
          <ComponentClipBoard
            name="Justify Content"
            propertyName="justify-content"
            value="center"
          />
          <ComponentClipBoard
            name="Aligh Items"
            propertyName="align-items"
            value="center"
          />
          <ComponentClipBoard
            name="Font Size"
            propertyName="font-size"
            value="16px"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFFFF"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF DEFAULT BADGES WITH INNER TEXT */}

      {/* STATUS COLORS */}
      <ComponentSub
        footnote="Provide visual cue of the status of an item."
        heading="Status colors"
        flexDirection="column"
        alignItems="flex-start"
        gap="4rem"
      >
        <ComponentImage image={StatusSuccessImg} width="6rem" heading="Success">
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#00B998"
          />
        </ComponentImage>
        <ComponentImage image={StatusWarningImg} width="6rem" heading="Warning">
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#FF9500"
          />
        </ComponentImage>
        <ComponentImage image={StatusErrorImg} width="4rem" heading="Error">
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#D51A52"
          />
        </ComponentImage>
        <ComponentImage
          image={StatusProcessingImg}
          width="7rem"
          heading="Processing"
        >
          <ComponentClipBoard
            name="Background Color"
            propertyName="background-color"
            value="#9D3FE7
            "
          />
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
