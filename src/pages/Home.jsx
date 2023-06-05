import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";

export default function Home() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="rgb(253, 230, 138)"
        marginBottom="5rem"
        heroTitle="UITS Design Guide for Web Apps"
        heroSubtitle="A comprehensive guide to help you design captivating and effective web applications"
      >
        <Button
          buttonText="Get started"
          backgroundColor="rgb(69, 10, 10)"
          color="#fff"
        />
      </PageHeaderCard>
      <section className="m-2 min-h-screen">
        <div className="">
          <div className="pl-10">
            <h1 className="text-5xl font-medium">Design Guide Updates</h1>
            <div className="grid grid-cols-3 mt-8">
              <ImageCard
                heading="Animation"
                bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Resources --> */}
      <section className="m-2 min-h-screen">
        <div className="">
          <div className="pl-10">
            <h1 className="text-5xl font-medium">Resources</h1>
            <div className="grid grid-cols-3 mt-8">
              <ImageCard
                heading="Lorem ipsum, dolem"
                bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
