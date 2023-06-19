import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";
import GridSystemImg from "../assets/images/adaptive-layout/layout/grid-system.png";
import PerformanceImg from "../assets/images/adaptive-layout/responsiveness/performance.svg";

export default function AdaptiveLayout() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="#177445"
        color="white"
        marginBottom="5rem"
        heroTitle="Adaptive Layout"
        heroSubtitle="Optimizing Layout and Responsiveness"
      ></PageHeaderCard>
      <section className="mb-32">
        <div className="grid grid-cols-2 gap-3">
          <ImageCard
            heading="Layout"
            bodyText="Guidelines for layout in web applications."
            to="layout"
            bgHeight="20rem"
            backgroundImage={GridSystemImg}
            backgroundSize="25rem"
          />
          <ImageCard
            heading="Responsive design"
            bodyText="Guidelines for responsive design in web applications."
            to="responsive-design"
            bgHeight="20rem"
            backgroundImage={PerformanceImg}
            backgroundSize="5rem"
          />
        </div>
      </section>
    </>
  );
}
