import Header from "../Header";
import CoursesContext from "../../Context/CoursesContext";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const VideoCard = (props) => {
  const { item } = props;
  const { title, description } = item;
  return (
    <>
      <li className="video-card">
        <div className="video-card-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="btn btn-dark">Practice</button>
        </div>
      </li>
      <hr className="line" />
    </>
  );
};

const Classes = () => (
  <CoursesContext.Consumer>
    {({ videosList }) => (
      <div className="main-container">
        <Header />
        <div className="classes-page-container">
          <ul className="videos-list-container">
            {videosList.map((item) => (
              <VideoCard item={item} key={item.title} />
            ))}
          </ul>
        </div>
      </div>
    )}
  </CoursesContext.Consumer>
);

export default Classes;
