import ImageCard from "../components/ImageCard";
import PageHeaderCard from "../components/PageHeaderCard";
import AlertImg from "../assets/images/alert.png";
import BadgeImg from "../assets/images/Badge.png";
import CheckboxImg from "../assets/images/Checkbox.png";
import TagImg from "../assets/images/Tag.png";
import TogglerImg from "../assets/images/Toggler.png";
import LinkImg from "../assets/images/Link.png";
import ButtonImg from "../assets/images/button2.png";

export default function Components() {
  return (
    <>
      <PageHeaderCard
        backgroundColor="rgb(254 205 211)"
        marginBottom="5rem"
        heroTitle="Components"
        heroSubtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
                        iste nemo temporibus odit sequi perferendis."
      ></PageHeaderCard>
      <section className="mb-32 grid grid-cols-3 gap-x-3 gap-y-32">
        <div>
          <h1 className="text-5xl font-medium mb-8">Alerts</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
            backgroundImage={AlertImg}
            to="alerts"
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-8">Badges</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
            backgroundImage={BadgeImg}
            to="badges"
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-8">Buttons</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
            backgroundImage={ButtonImg}
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-8">Cards</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
            backgroundImage=""
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-8">Checkboxes</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
            backgroundImage={CheckboxImg}
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-8">Forms</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-8">Links</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
            backgroundImage={LinkImg}
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-8">Modals</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-8">Navigation</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-8">Tags</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
            backgroundImage={TagImg}
          />
        </div>
        <div>
          <h1 className="text-5xl font-medium mb-8">Togglers</h1>
          <ImageCard
            heading="Lorem ipsum dolor"
            bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, neque?"
            backgroundImage={TogglerImg}
          />
        </div>
      </section>
    </>
  );
}
