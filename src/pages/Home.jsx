import Button from "../components/Button";
import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";
import HeroiconsSideImg from "../assets/images/icon/heroicons-solid.png";

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
      <section className="m-2 mb-60">
        <div className="">
          <div className="pt-20 lg:pl-10 xl:pt-0">
            <h1 className="font-medium min-[230px]:text-2xl min-[550px]:text-3xl lg:text-5xl">
              Design Guide Updates
            </h1>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3">
              <ImageCard
                heading="Animation"
                bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Resources --> */}
      <section className="m-2 mb-60">
        <div className="">
          <div className="lg:pl-10">
            <h1 className="font-medium min-[230px]:text-2xl min-[550px]:text-3xl lg:text-5xl">
              Resources
            </h1>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3">
              <ImageCard
                heading="Heroicons"
                bodyText="A comprehensive library for our design guide."
                backgroundImage={HeroiconsSideImg}
                to="https://heroicons.com"
                target="_blank"
                tooltip="Visit heroicons"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
