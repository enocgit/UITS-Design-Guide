import ComponentClipBoard from "../../components/ComponentClipBoard";
import ComponentImage from "../../components/ComponentImage";
import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";

export default function Typography() {
  return (
    <ComponentSubPage
      heading="Typography"
      description="Best practices for selecting and pairing fonts to create a visually appealing interfaces."
      backgroundColor="lightblue"
      backgroundPosition="center center"
      toPrev="/styles/iconography"
      prevName="Iconography"
    >
      {/* BRAND COLORS */}
      <ComponentSub
        heading="Typography"
        // image={BrandGreenImg}
        // image2={BrandRedImg}
        // image3={BrandYellowImg}
        // width="8rem"
        footnote="The primary colors that represent our brand and should be used consistently across  and web pages."
      >
        <ComponentImage image="" width="8rem" heading="Typography">
          <ComponentClipBoard />
        </ComponentImage>
        <ComponentImage image="" width="8rem" heading="Typography">
          <ComponentClipBoard />
        </ComponentImage>
        <ComponentImage image="" width="8rem" heading="Typography">
          <ComponentClipBoard />
        </ComponentImage>
      </ComponentSub>
      {/* END OF BRAND COLORS */}

      <Usage>
        <li>
          Brand colors: To create a cohesive and recognizable brand identity
          across all web pages and marketing materials.
        </li>
        <li>
          Shade: For bright or contrasting colors to draw attention to important
          calls to action, such as &quot;Sign Up&quot; or &quot;Buy Now&quot;
          buttons.
        </li>
        <li>
          Grayscale: For background or border elements to create contrast and
          depth in your design.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
