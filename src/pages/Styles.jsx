import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";

export default function Styles() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="rgb(253, 230, 138)"
        marginBottom="5rem"
        heroTitle="Styles"
        heroSubtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
                        iste nemo temporibus odit sequi perferendis."
      ></PageHeaderCard>
      <section className="mb-32">
        <div className="grid grid-cols-2 gap-3">
          <ImageCard
            heading="Animation"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
          />
          <ImageCard
            heading="Color"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
          />
          <ImageCard
            heading="Icon"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
          />
          <ImageCard
            heading="Typography"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
          />
        </div>
      </section>
    </>
  );
}
