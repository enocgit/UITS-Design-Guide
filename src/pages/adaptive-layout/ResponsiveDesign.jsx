import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
// import Usage from "../../components/Usage";

import DashboardImg from "../../assets/images/dashboard-view.png";
import ComponentImage from "../../components/ComponentImage";
import ScreenSizesImg from "../../assets/images/adaptive-layout/responsiveness/screen-sizes.svg";
import NavigationImg from "../../assets/images/adaptive-layout/responsiveness/navigation.svg";
import PerformanceImg from "../../assets/images/adaptive-layout/responsiveness/performance.svg";

export default function ResponsiveDesign() {
  return (
    <ComponentSubPage
      heading="Responsive Design"
      description="Guidelines for responsive design in web applications."
      backgroundImage={DashboardImg}
      backgroundColor="#fff3eb"
      backgroundPosition="bottom right 10rem"
      subnote="Responsive design is an important consideration when designing for a variety of devices and screen sizes. By creating designs that are responsive, users can access content on any device and have a consistent experience across all platforms."
      toPrev="/adaptive-layout/layout"
      prevName="Layout"
    >
      {/* SCREEN SIZE */}
      <ComponentSub
        heading="Screen size"
        footnote="Designs should be flexible enough to adapt to different screen sizes, from large desktop displays to small mobile screens."
      >
        <ComponentImage
          image={ScreenSizesImg}
          width="15rem"
          heading="Screen size"
        ></ComponentImage>
      </ComponentSub>
      {/* END OF SCREEN SIZE */}

      {/* NAVIGATION */}
      <ComponentSub
        heading="Navigation"
        footnote="Navigation menus and buttons should be designed with touchscreens in mind, with larger buttons and sufficient spacing to avoid accidental taps. "
      >
        <ComponentImage
          image={NavigationImg}
          width="15rem"
          heading="Navigation"
        ></ComponentImage>
      </ComponentSub>
      {/* END OF NAVIGATION */}

      {/* CONTENT HIERARCHY */}
      <ComponentSub
        heading="Content hierarchy"
        footnote="Content should be structured in a way that prioritizes important information on smaller screens, without overwhelming the user with too much information. "
      >
        <ComponentImage
          image=""
          width="15rem"
          heading="Content hierarchy"
        ></ComponentImage>
        <ComponentImage
          image=""
          width="20rem"
          heading="Content hierarchy"
        ></ComponentImage>
      </ComponentSub>
      {/* END OF CONTENT HIERARCHY */}

      {/* PERFORMANCE */}
      <ComponentSub
        heading="Performance"
        footnote="Large image and video files can slow down loading times on mobile devices, so designers must optimize files for quick loading. When designing for responsive design, it is important to test designs on multiple devices to ensure that the design is functional and visually appealing on all devices.  "
      >
        <ComponentImage
          image={PerformanceImg}
          width="5rem"
          heading="Performance"
        ></ComponentImage>
        <ComponentImage
          image=""
          width="20rem"
          heading="Performance"
        ></ComponentImage>
      </ComponentSub>
      {/* END OF PERFORMANCE */}

      {/* <Usage>
        <li>
          Displaying information about products, such as their name, image,
          price, and description.
        </li>
        <li>Displaying headlines, images, and a brief summary of articles</li>
        <li>
          Displaying information about a user, such as their name, profile
          picture, and bio.
        </li>
      </Usage> */}
    </ComponentSubPage>
  );
}
