import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";

export default function Components() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="rgb(253, 230, 138)"
        marginBottom="5rem"
        heroTitle="Components"
        heroSubtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
                        iste nemo temporibus odit sequi perferendis."
      ></PageHeaderCard>
      <section className="mb-32">
        <h1 className="text-5xl font-medium mb-8">Button</h1>
        <div className="grid grid-cols-3 gap-3">
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
          />
        </div>
      </section>
      <section className="mb-20">
        <h1 className="text-5xl font-medium mb-8">Button</h1>
        <div className="grid grid-cols-3 gap-3">
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
          />
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
          />
        </div>
      </section>
    </>
  );
}
