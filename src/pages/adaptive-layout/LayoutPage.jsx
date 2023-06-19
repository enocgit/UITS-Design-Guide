import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";

import DashboardImg from "../../assets/images/dashboard-view.png";
import ComponentImage from "../../components/ComponentImage";
import GridSystemImg from "../../assets/images/adaptive-layout/layout/grid-system.png";
import WhitespaceImg from "../../assets/images/adaptive-layout/layout/whitespace.svg";
import CardLayoutImg from "../../assets/images/adaptive-layout/layout/card-2.png";
import FullWidthLayoutImg from "../../assets/images/adaptive-layout/layout/full-width-layout.png";
import FixedWidthLayoutImg from "../../assets/images/adaptive-layout/layout/fixed-width-layout.png";

export default function LayoutPage() {
  return (
    <ComponentSubPage
      heading="Layout"
      description="Guidelines for layout in web applications."
      backgroundImage={DashboardImg}
      backgroundColor="#fff3eb"
      backgroundPosition="bottom right 10rem"
      subnote="The layout of a web application refers to how the different UI elements are arranged on the screen. It can have a big impact on the usability and user experience of the product. To ensure consistency and a cohesive design, we have established the following guidelines for layouts in web applications. "
      toPrev="/adaptive-layout"
      toNext="/adaptive-layout/responsive-design"
      prevName="Adaptive Layout"
      nextName="Responsive Design"
    >
      {/* GRID SYSTEM */}
      <ComponentSub
        heading="Grid System"
        footnote="Our design system utilizes a flexible grid system, with a default of 12 columns, that allows for both consistency and flexibility in layout design. This ensures that content is always aligned and easy to scan. "
      >
        <ComponentImage
          image={GridSystemImg}
          width="30rem"
          heading="Grid System"
        ></ComponentImage>
      </ComponentSub>
      {/* END OF GRID SYSTEM */}

      {/* WHITE SPACE */}
      <ComponentSub
        heading="White space"
        footnote="White space, or the empty space between UI elements, is a crucial aspect of design. It helps to make the content more readable, improves the overall flow and visual hierarchy of the page, and creates a sense of balance. We recommend using ample white space in all designs to ensure a clean and clear layout."
      >
        <ComponentImage
          image={WhitespaceImg}
          width="30rem"
          heading="White space"
        ></ComponentImage>
        <ComponentImage
          image=""
          width="20rem"
          heading="White space"
        ></ComponentImage>
      </ComponentSub>
      {/* END OF WHITE SPACE */}

      {/* FULL-WIDTH LAYOUT */}
      <ComponentSub
        heading="Full-width layout"
        footnote="A full-width layout stretches the entire width of the screen, allowing for maximum use of space. This type of layout is great for content-heavy pages like blogs or news."
      >
        <ComponentImage
          image=""
          width="15rem"
          heading="Full-width layout"
        ></ComponentImage>
        <ComponentImage
          image={FullWidthLayoutImg}
          width="20rem"
          heading="Full-width layout"
        ></ComponentImage>
      </ComponentSub>
      {/* END OF FULL-WIDTH LAYOUT */}

      {/* FIXED-WIDTH LAYOUT */}
      <ComponentSub
        heading="Fixed-width layout"
        footnote=" A fixed-width layout has a set width and is centered in the screen, leaving empty space on the sides. This type of layout is useful for designs that require a more contained feel, like landing pages or call-to-action pages. "
      >
        <ComponentImage
          image={FixedWidthLayoutImg}
          width="20rem"
          heading="Fixed-width layout"
        ></ComponentImage>
      </ComponentSub>
      {/* END OF FIXED-WIDTH LAYOUT */}

      {/* CARD LAYOUT */}
      <ComponentSub
        heading="Card layout"
        footnote="A card layout is a popular design style for presenting information in a visually appealing and easy-to-digest way. This type of layout is great for content that can be grouped into smaller, individual sections."
      >
        <ComponentImage
          image={CardLayoutImg}
          width="20rem"
          heading="Card layout"
        ></ComponentImage>
      </ComponentSub>
      {/* END OF CARD LAYOUT */}

      <Usage>
        <li>
          Use Full-width layout for content-heavy pages like blogs and news.
        </li>
        <li>
          You may use Fixed-width layout for designs that require a more
          contained feel, like landing pages or call-to-action pages like
          &quot;Sign up&quot; and &quot;Join the community&quot;.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
