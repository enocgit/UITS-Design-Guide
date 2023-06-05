import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import ColorbgImg from "../../assets/images/color/alert.png";
import BrandRedImg from "../../assets/images/color/brand-red.png";
import BrandGreenImg from "../../assets/images/color/brand-green.png";
import BrandYellowImg from "../../assets/images/color/brand-yellow.png";
import ShadeGreenImg from "../../assets/images/color/shade-green.png";
import ShadeRedImg from "../../assets/images/color/shade-red.png";
import ShadeYellowImg from "../../assets/images/color/shade-yellow.png";
import Gray100Img from "../../assets/images/color/gray-100.png";
import Gray200Img from "../../assets/images/color/gray-200.png";
import Gray300Img from "../../assets/images/color/gray-300.png";
import Gray400Img from "../../assets/images/color/gray-400.png";
import Gray500Img from "../../assets/images/color/gray-500.png";
import Gray600Img from "../../assets/images/color/gray-600.png";
import Gray700Img from "../../assets/images/color/gray-700.png";
import Gray800Img from "../../assets/images/color/gray-800.png";
import Gray900Img from "../../assets/images/color/gray-900.png";
import Usage from "../../components/Usage";
import ComponentImage from "../../components/ComponentImage";
import ComponentClipBoard from "../../components/ComponentClipBoard";

export default function Color() {
  return (
    <ComponentSubPage
      heading="Color"
      description="Guidelines for choosing and using a cohesive color palette."
      backgroundImage={ColorbgImg}
      backgroundColor="pink"
      color="#d9475d"
      backgroundPosition="center center"
      // backgroundSize="30rem"
      toPrev="/styles"
      toNext="/styles/iconography"
      prevName="Styles"
      nextName="Iconography"
    >
      {/* BRAND COLORS */}
      <ComponentSub
        heading="Brand colors"
        // image={BrandGreenImg}
        // image2={BrandRedImg}
        // image3={BrandYellowImg}
        // width="8rem"
        footnote="The primary colors that represent our brand and should be used consistently across  and web pages."
      >
        <ComponentImage
          image={BrandGreenImg}
          width="8rem"
          heading="Brand green"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#014903"
            // bgColorVal="#014903"
          />
        </ComponentImage>
        <ComponentImage image={BrandRedImg} width="8rem" heading="Brand red">
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#8D0101"
          />
        </ComponentImage>
        <ComponentImage
          image={BrandYellowImg}
          width="8rem"
          heading="Brand yellow"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFB06"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF BRAND COLORS */}

      {/* SHADE */}
      <ComponentSub
        heading="Shade"
        // image={BrandShadeImg}
        footnote="Variations of the brand colors that can be used to create depth and contrast in design."
      >
        <ComponentImage
          image={ShadeGreenImg}
          width="8rem"
          heading="Green shade"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#2C802E"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#72B673"
          />
        </ComponentImage>
        <ComponentImage image={ShadeRedImg} width="8rem" heading="Red shade">
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#6D1515"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#CE5E5E"
          />
        </ComponentImage>
        <ComponentImage
          image={ShadeYellowImg}
          width="8rem"
          heading="Yellow shade"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#E1DE00"
          />
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#FFFB6D"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF SHADE */}

      {/* GRAYSCALE */}
      <ComponentSub
        justifyContent="start"
        heading="Grayscale"
        footnote="A range of neutral colors that can be used as a background or to create contrast with other colors in design."
      >
        <ComponentImage
          image={Gray900Img}
          width="8rem"
          heading="Grayscale (900)"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#212121"
          />
        </ComponentImage>
        <ComponentImage
          image={Gray800Img}
          width="8rem"
          heading="Grayscale (800)"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#424242"
          />
        </ComponentImage>
        <ComponentImage
          image={Gray700Img}
          width="8rem"
          heading="Grayscale (700)"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#616161"
          />
        </ComponentImage>
        <ComponentImage
          image={Gray600Img}
          width="8rem"
          heading="Grayscale (600)"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#757575"
          />
        </ComponentImage>
        <ComponentImage
          image={Gray500Img}
          width="8rem"
          heading="Grayscale (500)"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#9E9E9E"
          />
        </ComponentImage>
        <ComponentImage
          image={Gray400Img}
          width="8rem"
          heading="Grayscale (400)"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#BDBDBD"
          />
        </ComponentImage>
        <ComponentImage
          image={Gray300Img}
          width="8rem"
          heading="Grayscale (300)"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#BDBDBD"
          />
        </ComponentImage>
        <ComponentImage
          image={Gray200Img}
          width="8rem"
          heading="Grayscale (200)"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#EEEEEE"
          />
        </ComponentImage>
        <ComponentImage
          image={Gray100Img}
          width="8rem"
          heading="Grayscale (100)"
        >
          <ComponentClipBoard
            name="Color"
            propertyName="color"
            value="#F5F5F5"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF GRAYSCALE */}

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
