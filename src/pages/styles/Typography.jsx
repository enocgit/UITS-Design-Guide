import ComponentClipBoard from "../../components/ComponentClipBoard";
import ComponentImage from "../../components/ComponentImage";
import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import RegularType from "../../assets/images/typography/regular.svg";
import MediumType from "../../assets/images/typography/medium.svg";
import BoldType from "../../assets/images/typography/bold.svg";
import Heading1 from "../../assets/images/typography/heading_1.svg";
import Heading2 from "../../assets/images/typography/heading_2.svg";
import Heading3 from "../../assets/images/typography/heading_3.svg";
import Body from "../../assets/images/typography/body.svg";
import Caption from "../../assets/images/typography/caption.svg";

export default function Typography() {
  return (
    <ComponentSubPage
      heading="Typography"
      description="Best practices for selecting and pairing fonts to create a visually appealing interfaces."
      subnote="Fathom font system: Elegant, versatile, and timeless. Built on the foundation of Rubik font and crafted for digital interfaces, Fathom strikes the perfect balance between readability and visual appeal. Inspired by classic typefaces, Fathom brings together tradition and innovation, making it ideal for creating polished and sophisticated designs."
      backgroundColor="#c1b5d9"
      color="#fff"
      backgroundPosition="center center"
      toPrev="/styles/iconography"
      prevName="Iconography"
    >
      {/* FONT WEIGHT */}
      <ComponentSub
        heading="Font Weight"
        footnote="The primary colors that represent our brand and should be used consistently across  and web pages."
        flexDirection="column"
        gap="2rem"
      >
        <ComponentImage image={RegularType} width="10rem" heading="Regular">
          <ComponentClipBoard
            name="Font Weight"
            propertyName="font-weight"
            value="300"
          />
        </ComponentImage>
        <ComponentImage image={MediumType} width="10rem" heading="Medium">
          <ComponentClipBoard
            name="Font Weight"
            propertyName="font-weight"
            value="600"
          />
        </ComponentImage>

        <ComponentImage image={BoldType} width="10rem" heading="Bold">
          <ComponentClipBoard
            name="Font Weight"
            propertyName="font-weight"
            value="700"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF FONT WEIGHT */}
      {/* FONT SIZE */}
      <ComponentSub
        heading="Font Size"
        footnote="The primary colors that represent our brand and should be used consistently across  and web pages."
        flexDirection="column"
        gap="2rem"
      >
        <ComponentImage image={Heading1} width="16rem" heading="Heading 1">
          <ComponentClipBoard
            name="Font Size"
            propertyName="font-size"
            value="32px"
          />
          <ComponentClipBoard
            name="Font Weight"
            propertyName="font-weight"
            value="700"
          />
        </ComponentImage>
        <ComponentImage image={Heading2} width="14rem" heading="Heading 2">
          <ComponentClipBoard
            name="Font Size"
            propertyName="font-size"
            value="27px"
          />
          <ComponentClipBoard
            name="Font Weight"
            propertyName="font-weight"
            value="700"
          />
        </ComponentImage>
        <ComponentImage image={Heading3} width="12rem" heading="Heading 3">
          <ComponentClipBoard
            name="Font Size"
            propertyName="font-size"
            value="19px"
          />
          <ComponentClipBoard
            name="Font Weight"
            propertyName="font-weight"
            value="700"
          />
        </ComponentImage>
        <ComponentImage image={Body} width="6rem" heading="Body">
          <ComponentClipBoard
            name="Font Size"
            propertyName="font-size"
            value="16px"
          />
          <ComponentClipBoard
            name="Font Weight"
            propertyName="font-weight"
            value="300"
          />
        </ComponentImage>
        <ComponentImage image={Caption} width="5rem" heading="Caption">
          <ComponentClipBoard
            name="Font Size"
            propertyName="font-size"
            value="12px"
          />
          <ComponentClipBoard
            name="Font Weight"
            propertyName="font-weight"
            value="300"
          />
        </ComponentImage>
      </ComponentSub>
      {/* END OF FONT SIZE */}

      <Usage>
        <li>Regular weight: For most body text. </li>
        <li>Medium weight: For subheadings.</li>
        <li>Bold weight: For important headings or call-to-action buttons.</li>
        <li>Heading 1: For hero section titles.</li>
        <li>Heading 2: For section headings.</li>
        <li>Heading 3: For subheadings within sections.</li>
        <li>Body: For paragraphs and content.</li>
        <li>Caption: For image captions or metadata.</li>
        <li>
          Visit the{" "}
          <a
            href="https://www.figma.com/file/BGlf7MWqu3IOL8cZQAj1Y9/Fathom-Design-System%3A-Typography-(Community)?type=design&node-id=2-116&t=fs4n8rGDV0jtxBr2-0"
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-900"
          >
            Fathom Font System
          </a>
        </li>
      </Usage>
    </ComponentSubPage>
  );
}
