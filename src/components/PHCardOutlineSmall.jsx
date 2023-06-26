import OutlineTopicSmall from "./OutlineTopicSmall";

export default function PHCardOutlineSmall() {
  return (
    <section className="m-2 block xl:hidden">
      {/* Outline */}
      <div className="mt-16">
        <OutlineTopicSmall
          href="#about-udgweb"
          title="What is UITS Design Guide for Web Apps?"
          body="Learn about the comprehensive system for creating consistent designs
            across web applications."
        />
        <OutlineTopicSmall
          href="#using-udgweb"
          title="Using UDGWebA"
          body="Explore the styles and components sections."
        />
        <OutlineTopicSmall
          href="#design"
          title="Design"
          body="Explore two key aspects: 'Styles and customization' and 'Adaptive layout.' "
        />
      </div>
    </section>
  );
}
