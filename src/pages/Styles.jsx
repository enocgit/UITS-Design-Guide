import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";
import AlertColorsImg from "../assets/images/color/alert.png";
import HeroiconsSideImg from "../assets/images/icon/heroicons-solid.png";
import FathomImg from "../assets/images/typography/cover.png";
import Spinner from "../assets/images/animation/spinner.svg";

export default function Styles() {
  return (
    <div>
      <PageHeaderCard
        backgroundColor="rgb(253, 230, 138)"
        marginBottom="5rem"
        heroTitle="Styles"
        heroSubtitle="Customizable design elements to enhance the look and feel of web applications."
      ></PageHeaderCard>
      <section className="mb-32">
        <div className="grid gap-16 min-[540px]:grid-cols-2 min-[540px]:gap-3">
          <ImageCard
            heading="Animation and Interaction"
            bodyText=" Tips for adding engaging and effective animation and interaction to your application."
            to="/styles/animation"
            bgHeight="20rem"
            backgroundImage={Spinner}
            backgroundSize="5rem"
          />
          <ImageCard
            heading="Color"
            bodyText="Guidelines for choosing and using a cohesive color palette."
            to="/styles/color"
            bgHeight="20rem"
            backgroundImage={AlertColorsImg}
          />
          <ImageCard
            heading="Iconography"
            bodyText=" Guidance on using icons effectively to enhance interfaces and improve usability."
            to="/styles/iconography"
            bgHeight="20rem"
            backgroundImage={HeroiconsSideImg}
          />
          <ImageCard
            heading="Typography"
            bodyText="Best practices for selecting and pairing fonts to create a visually appealing interfaces."
            to="/styles/typography"
            bgHeight="20rem"
            backgroundImage={FathomImg}
          />
        </div>
      </section>
    </div>
  );
}
