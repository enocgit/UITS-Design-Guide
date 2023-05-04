import buttonImg from "../assets/images/button.png";
import GetStartedSection from "../components/GetStartedSection";
import PageHeaderCard from "../components/PageHeaderCard";
import OutlineMainOutlineCard from "../components/OutlineMainOutlineCard";

export default function GetStarted() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="rgb(221 214 254)"
        heroTitle="Get Started"
        heroSubtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
                        iste nemo temporibus odit sequi perferendis."
      >
        {/* Outline */}
        <div className="xl:grid grid-cols-2 mt-10 gap-2 hidden">
          {/* Outline-topic */}
          <a href="/src/about.html">
            <div className="bg-white p-5 rounded-2xl relative hover:bottom-1 transition-all">
              <h2 className="text-2xl font-medium">
                What&apos;s UITS Design Guide for Web?
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, ipsum?
              </p>
            </div>
          </a>
          {/* Outline-topic */}
          <a href="/src/using.html">
            <div className="bg-white p-5 rounded-2xl relative hover:bottom-1 transition-all">
              <h2 className="text-2xl font-medium">Using UDGWeb</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, ipsum?
              </p>
            </div>
          </a>
          {/* Outline-topic */}
          <a href="/src/design.html">
            <div className="bg-white p-5 rounded-2xl relative hover:bottom-1 transition-all">
              <h2 className="text-2xl font-medium">Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, ipsum?
              </p>
            </div>
          </a>
          {/* Outline-topic */}
          <a href="/src/develop.html">
            <div className="bg-white p-5 rounded-2xl relative hover:bottom-1 transition-all">
              <h2 className="text-2xl font-medium">Develop</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, ipsum?
              </p>
            </div>
          </a>
        </div>
      </PageHeaderCard>
      <GetStartedSection outlineHeading="What's UITS Design Guide for Web?">
        <p className="mt-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, sed
          deleniti distinctio aspernatur similique provident facere error? Quas
          itaque ullam blanditiis delectus, quasi alias facere libero quibusdam
          autem quam sapiente!
        </p>
        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          nostrum nemo deserunt ducimus harum. Sint impedit, laudantium porro
          quod veritatis fugit sed officia architecto. Porro est sequi fuga
          suscipit quaerat!
        </p>
      </GetStartedSection>
      <GetStartedSection
        outlineHeading="Using UITS Design Guide for Web"
        backgroundImage={buttonImg}
      >
        <p className="mt-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, sed
          deleniti distinctio aspernatur similique provident facere error? Quas
          itaque ullam blanditiis delectus, quasi alias facere libero quibusdam
          autem quam sapiente!
        </p>
        <p className="mt-6 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          nostrum nemo deserunt ducimus harum. Sint impedit, laudantium porro
          quod veritatis fugit sed officia architecto. Porro est sequi fuga
          suscipit quaerat!
        </p>
        <OutlineMainOutlineCard
          heading="Styles"
          bodyText="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
            />
          </svg>
        </OutlineMainOutlineCard>
        <OutlineMainOutlineCard
          heading="Components"
          bodyText="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          to="/components"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </OutlineMainOutlineCard>
      </GetStartedSection>
      <GetStartedSection outlineHeading="Design">
        <p className="mt-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, sed
          deleniti distinctio aspernatur similique provident facere error? Quas
          itaque ullam blanditiis delectus, quasi alias facere libero quibusdam
          autem quam sapiente!
        </p>
        <p className="mt-6 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          nostrum nemo deserunt ducimus harum. Sint impedit, laudantium porro
          quod veritatis fugit sed officia architecto. Porro est sequi fuga
          suscipit quaerat!
        </p>
        <OutlineMainOutlineCard
          heading="Styles & Customization"
          bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
            />
          </svg>
        </OutlineMainOutlineCard>
        <OutlineMainOutlineCard
          heading="Adaptive Layout"
          bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
            />
          </svg>
        </OutlineMainOutlineCard>
      </GetStartedSection>
    </>
  );
}
