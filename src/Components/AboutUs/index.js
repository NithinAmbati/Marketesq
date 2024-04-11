import CoursesContext from "../../Context/CoursesContext";
import Header from "../Header";
import "./index.css";

const CardItem = (props) => {
  const { item } = props;
  const { id, description } = item;
  if (id % 2 === 1) {
    return (
      <li className="about-us-list-item-1">
        <div>{description}</div>
      </li>
    );
  }
  return (
    <li className="about-us-list-item-2">
      <div>{description}</div>
    </li>
  );
};

const Home = () => (
  <CoursesContext.Consumer>
    {({ aboutUsList }) => (
      <div className="main-container">
        <Header />
        <div className="about-us-page-container">
          <ul className="about-us-list-container">
            {aboutUsList.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    )}
  </CoursesContext.Consumer>
);

export default Home;
