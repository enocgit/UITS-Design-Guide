import ComponentSub from "../../components/ComponentSub";
import ComponentSubPage from "../../components/ComponentSubPage";
import Usage from "../../components/Usage";
import CardImg1 from "../../assets/images/cards/card-1.png";
import CardImg2 from "../../assets/images/cards/card-2.png";
import DashboardImg from "../../assets/images/dashboard-view.png";

export default function Cards() {
  return (
    <ComponentSubPage
      heading="Cards"
      description="Group related information and actions together."
      backgroundImage={DashboardImg}
      backgroundPosition="bottom right 10rem"
      subnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      toPrev="/components/buttons"
      toNext="/components/checkboxes"
      prevName="Buttons"
      nextName="Checkboxes"
    >
      <ComponentSub
        heading="Default"
        image={CardImg1}
        width="15rem"
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      />
      <ComponentSub
        heading="Default"
        image={CardImg2}
        width="20rem"
        footnote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        quod eveniet!"
      />
      <Usage>
        <li>
          Displaying information about products, such as their name, image,
          price, and description.
        </li>
        <li>Displaying headlines, images, and a brief summary of articles</li>
        <li>
          Displaying information about a user, such as their name, profile
          picture, and bio.
        </li>
      </Usage>
    </ComponentSubPage>
  );
}