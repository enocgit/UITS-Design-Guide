import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";

export default function AdaptiveLayout() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="#177445"
        color="white"
        marginBottom="5rem"
        heroTitle="Adaptive Layout"
        heroSubtitle="Customizable design elements to enhance the look and feel of web applications."
      ></PageHeaderCard>
      <section className="mb-32">
        <div className="grid grid-cols-2 gap-3">
          <ImageCard
            heading="Layout"
            bodyText=" Tips for adding engaging and effective animation to your application."
            to=""
            bgHeight="20rem"
            backgroundImage=""
          />
        </div>
      </section>
    </>
  );
}
