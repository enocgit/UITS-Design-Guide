import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";
import AlertColorsImg from "../assets/images/color/alert.png";
import HeroiconsSideImg from "../assets/images/icon/heroicons-solid.png";

export default function Styles() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="rgb(253, 230, 138)"
        marginBottom="5rem"
        heroTitle="Styles"
        heroSubtitle="Customizable design elements to enhance the look and feel of web applications."
      ></PageHeaderCard>
      <section className="mb-32">
        <div className="grid grid-cols-2 gap-3">
          <ImageCard
            heading="Animation"
            bodyText=" Tips for adding engaging and effective animation to your application."
            to="/styles/animation"
            bgHeight="20rem"
            backgroundImage=""
          />
          <ImageCard
            heading="Color"
            bodyText="Guidelines for choosing and using a cohesive color palette."
            to="/styles/color"
            bgHeight="20rem"
            backgroundImage={AlertColorsImg}
          />
          <ImageCard
            heading="Icon"
            bodyText=" Guidance on using icons effectively to enhance interfaces and improve usability."
            to="/styles/icon"
            bgHeight="20rem"
            backgroundImage={HeroiconsSideImg}
          />
          <ImageCard
            heading="Typography"
            bodyText="Best practices for selecting and pairing fonts to create a visually appealing interfaces."
            to="/styles/typography"
            bgHeight="20rem"
            backgroundImage=""
          />
        </div>
      </section>
    </>
  );
}
