import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import ColorbgImg from "../../assets/images/color/alert.png";
import BrandColorsImg from "../../assets/images/color/brand-colors.png";
import BrandShadeImg from "../../assets/images/color/brand-shade.png";
import GrayscaleImg from "../../assets/images/color/grayscale.png";
import Usage from "../../components/Usage";

export default function Color() {
  return (
    <ComponentSubPage
      heading="Color"
      description="Guidelines for choosing and using a cohesive color palette."
      backgroundImage={ColorbgImg}
      backgroundColor="#ea9641"
      backgroundPosition="center center"
      // backgroundSize="30rem"
      toPrev="/styles"
      toNext="/styles/iconography"
      prevName="Styles"
      nextName="Iconography"
    >
      <ComponentSub
        heading="Brand colors"
        image={BrandColorsImg}
        footnote="The primary colors that represent our brand and should be used consistently across  and web pages."
      />
      <ComponentSub
        heading="Shade"
        image={BrandShadeImg}
        footnote="Variations of the brand colors that can be used to create depth and contrast in design."
      />
      <ComponentSub
        heading="Grayscale"
        image={GrayscaleImg}
        width="40rem"
        footnote="A range of neutral colors that can be used as a background or to create contrast with other colors in design."
      />
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
