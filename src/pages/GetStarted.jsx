import buttonImg from "../assets/images/button-dimension.svg";
import GetStartedSection from "../components/GetStartedSection";
import PageHeaderCard from "../components/PageHeaderCard";
import OutlineMainOutlineCard from "../components/OutlineMainOutlineCard";
import DashboardImg from "../assets/images/dashboard-view.png";
import DesignImg from "../assets/images/design.png";
import Accordion from "../components/AccordionChild";
import GetStartedList from "../components/GetStartedList";

export default function GetStarted() {
  return (
    <>
      <PageHeaderCard
        color="rgb(30 58 138)"
        subtitleColor="rgb(30 58 138)"
        backgroundColor="rgb(221 214 254)"
        heroTitle="Get Started"
        heroSubtitle="A guide to help you get started with designing web applications."
      >
        {/* Outline */}
        <div className="xl:grid grid-cols-2 mt-10 gap-2 hidden">
          {/* Outline-topic */}
          <a href="#about-udgweb">
            <div className="bg-blue-50 p-5 rounded-2xl relative hover:bottom-1 transition-all">
              <h2 className="text-2xl font-medium">
                What is UITS Design Guide for Web?
              </h2>
              <p>
                Learn about the comprehensive system for creating consistent
                designs across web applications.
              </p>
            </div>
          </a>
          {/* Outline-topic */}
          <a href="#using-udgweb">
            <div className="bg-blue-50 p-5 rounded-2xl relative hover:bottom-1 transition-all">
              <h2 className="text-2xl font-medium">Using UDGWeb</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, ipsum?
              </p>
            </div>
          </a>
          {/* Outline-topic */}
          <a href="#design">
            <div className="bg-blue-50 p-5 rounded-2xl relative hover:bottom-1 transition-all">
              <h2 className="text-2xl font-medium">Design</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, ipsum?
              </p>
            </div>
          </a>
          {/* Outline-topic */}
          <a href="/src/develop.html">
            <div className="bg-blue-50 p-5 rounded-2xl relative hover:bottom-1 transition-all">
              <h2 className="text-2xl font-medium">Develop</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus, ipsum?
              </p>
            </div>
          </a>
        </div>
      </PageHeaderCard>
      <GetStartedSection
        id="about-udgweb"
        outlineHeading="What is UITS Design Guide for Web?"
        backgroundImage={DashboardImg}
      >
        <p className="mt-7">
          The University Information Technology Services (UITS) Design Guide for
          Web is a comprehensive system for creating consistent designs across
          web applications.
        </p>
        <p className="mt-6">
          The purpose of this document is to provide guidelines for designers
          and developers to follow, ensuring that all projects within the
          organization adhere to a consistent visual identity.
        </p>
        <Accordion
          title="Target audience"
          body="  This design guide is intended for designers, developers, and contract
          workers within the organization. By following the guidelines outlined
          in this document, everyone can ensure that their work is consistent
          and aligns with the organization's brand."
          marginTop="1.75rem"
        />
        <Accordion
          title="Scope"
          body="The UITS Design Guide for Web covers the following elements: typography, color scheme, layout, iconography, components, accessibility, animations, responsive design and multimedia content for web applications. By following the guidelines for each of these elements, all projects within the organization can achieve a consistent look and feel. "
          marginTop="0.75rem"
        />
        <Accordion
          title="Benefit"
          body="The UITS Design Guide for Web covers the following elements: typography, color scheme, layout, iconography, components, accessibility, animations, responsive design and multimedia content for web applications. By following the guidelines for each of these elements, all projects within the organization can achieve a consistent look and feel. "
          marginTop="0.75rem"
        >
          <GetStartedList
            title="Consistency"
            body="By following the guidelines outlined in this document, all projects within the organization will have a consistent visual identity."
          />
          <GetStartedList
            title="Reduced development time"
            body="By using pre-defined components and guidelines, designers and developers can work more efficiently."
          />
          <GetStartedList
            title="Improved User Experience"
            body="A consistent visual identity makes it easier for users to understand and navigate products."
          />
          <GetStartedList
            title="Visual identity for the organization"
            body="By following the guidelines in this document, the organization can establish a unique and recognizable visual identity."
          />
          <GetStartedList
            title="Communication and Collaboration"
            body="By providing a common set of guidelines, communication and collaboration between designers and developers can be improved."
          />
          <GetStartedList
            title="Efficiency"
            body="Using pre-defined components and guidelines can lead to more efficient and effective design and development processes."
          />
        </Accordion>
      </GetStartedSection>
      <GetStartedSection
        id="using-udgweb"
        outlineHeading="Using UITS Design Guide for Web"
        backgroundImage={buttonImg}
      >
        <p className="mt-7">
          The UITS Design Guide for Web covers the following elements:
          <span className="underline"> typography</span>,{" "}
          <span className="underline">iconography</span>
          <span>, </span>
          <span className="underline">components</span>
          <span>, </span>
          <span className="underline">accessibility</span>
          <span>, </span>
          <span className="underline">animations</span>
          <span>, </span>
          <span className="underline">color scheme</span>
          <span>, </span>
          <span className="underline"></span>
          <span className="underline">layout</span>
          <span>, </span>
          <span className="underline">responsive</span>
          <span>, </span>
          <span className="underline">design</span>
          <span> and </span>
          <span className="underline">multimedia</span>
          <span> content for web applications.</span>
        </p>
        <p className="mt-6 mb-12">
          It is recommended that designers and developers follow the design
          principles outlined in this guide to produce a consistent design
          pattern across all web projects.
        </p>
        <OutlineMainOutlineCard
          heading="Styles"
          bodyText="Customizable design elements to enhance the look and feel of web applications."
          to="/styles"
          width="88%"
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
          bodyText="Components are the building blocks for creating user interfaces for web applications.
"
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
      <GetStartedSection
        id="design"
        outlineHeading="Design"
        backgroundImage={DesignImg}
      >
        <p className="mt-7">
          In this section, we explore two key aspects: &apos;Styles and
          customization&apos; and &apos;Adaptive layout.&apos; By understanding
          these concepts, you&apos;ll gain insights into how to create
          compelling designs that are not only visually appealing but also
          flexible and responsive to meet the diverse needs of our users.
        </p>
        <p className="mt-6 mb-12">
          Let&apos;s dive in and discover the principles that will empower you
          to design exceptional user experiences.
        </p>
        <OutlineMainOutlineCard
          heading="Styles & Customization"
          bodyText="Customizable design elements to enhance the look and feel of web applications."
          to="/styles"
          width="88%"
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
