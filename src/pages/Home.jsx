import Button from "../components/Button";
import PageHeaderCard from "../components/PageHeaderCard";

export default function Home() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="rgb(253, 230, 138)"
        marginBottom="5rem"
        heroTitle="UITS Design Guide for Web"
        heroSubtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
                        iste nemo temporibus odit sequi perferendis."
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
              <div className="w-full rounded-3xl bg-neutral-100">
                <div className="bg-yellow-200 w-full h-48 rounded-3xl"></div>
                <div className="p-5 rounded-3xl">
                  <h3 className="font-medium text-2xl">Lorem, ipsum dolor</h3>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                    neque?
                  </p>
                </div>
              </div>
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
              <div className="w-full rounded-3xl bg-neutral-100">
                <div className="bg-yellow-200 w-full h-48 rounded-3xl"></div>
                <div className="p-5 rounded-3xl">
                  <h3 className="font-medium text-2xl">Lorem, ipsum dolor</h3>
                  <p className="mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                    neque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
