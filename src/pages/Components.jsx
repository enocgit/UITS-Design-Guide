import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";
import AlertImg from "../assets/images/alert.png";
import BadgeImg from "../assets/images/Badge.png";
import CheckboxImg from "../assets/images/Checkbox.png";
import TagImg from "../assets/images/Tag.png";
import TogglerImg from "../assets/images/Toggler.png";
import LinkImg from "../assets/images/Link.png";
import ButtonImg from "../assets/images/button2.png";
import LoginModalImg from "../assets/images/modals/login.png";
import BreadCrumbImg from "../assets/images/navigation/breadcrumb.png";
import FormImg from "../assets/images/Form.png";
import DashboardImg from "../assets/images/dashboard-view.png";

export default function Components() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="rgb(254 205 211)"
        backgroundImage={`url(${DashboardImg})`}
        backgroundSize="20rem"
        marginBottom="5rem"
        heroTitle="Components"
        heroSubtitle="Components are the building blocks for creating user interfaces for web applications."
      ></PageHeaderCard>
      <section className="mb-32 grid w-full min-[580px]:grid-cols-2 min-[902px]:grid-cols-3 gap-x-3 gap-y-16 min-[580px]:gap-y-32">
        <div className="">
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">Alerts</h1>
          <ImageCard
            heading="Alerts"
            bodyText="Notify users about important information or events."
            backgroundImage={AlertImg}
            backgroundSize="20rem"
            to="alerts"
          />
        </div>
        <div>
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">Badges</h1>
          <ImageCard
            heading="Badges"
            bodyText="Display additional information or status on an element."
            backgroundImage={BadgeImg}
            backgroundSize="6rem"
            to="badges"
          />
        </div>
        <div>
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">
            Buttons
          </h1>
          <ImageCard
            heading="Buttons"
            bodyText="Trigger an action or navigate to another page."
            backgroundImage={ButtonImg}
            backgroundSize="10rem"
            to="buttons"
          />
        </div>
        <div>
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">Cards</h1>
          <ImageCard
            heading="Cards"
            bodyText="Group related information and actions together."
            backgroundImage={DashboardImg}
            backgroundSize="20rem"
            to="cards"
          />
        </div>
        <div>
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">
            Checkboxes
          </h1>
          <ImageCard
            heading="Checkbox and Radio"
            bodyText="Allow users to select one or multiple options."
            backgroundImage={CheckboxImg}
            backgroundSize="10rem"
            to="checkboxes"
          />
        </div>
        <div>
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">Forms</h1>
          <ImageCard
            heading="Input components"
            bodyText="Collect and submit user input."
            backgroundImage={FormImg}
            backgroundPosition="center top 4rem"
            to="forms"
          />
        </div>
        <div>
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">Links</h1>
          <ImageCard
            heading="Links"
            bodyText="Navigate to another page or resource."
            backgroundImage={LinkImg}
            backgroundSize="20rem"
            to="links"
          />
        </div>
        <div>
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">Modals</h1>
          <ImageCard
            heading="Modals"
            bodyText="Display content or require user action before continuing."
            backgroundImage={LoginModalImg}
            to="modals"
          />
        </div>
        <div>
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">
            Navigation
          </h1>
          <ImageCard
            heading="Navigation"
            bodyText="Provide links to different sections of an application.
"
            backgroundImage={BreadCrumbImg}
            backgroundPosition="left 10rem center"
            to="navigation"
          />
        </div>
        <div>
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">Tags</h1>
          <ImageCard
            heading="Tags"
            bodyText=" Categorize or label content."
            backgroundImage={TagImg}
            backgroundSize="10rem"
            to="tags"
          />
        </div>
        <div>
          <h1 className="mb-8 text-3xl lg:text-5xl font-medium text-neutral-900">
            Togglers
          </h1>
          <ImageCard
            heading="Togglers"
            bodyText=" Enable or disable a setting or option."
            backgroundImage={TogglerImg}
            backgroundSize="6rem"
            to="togglers"
          />
        </div>
      </section>
    </>
  );
}
