import Header from "../Header";
import CoursesContext from "../../Context/CoursesContext";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Footer from "../Footer";

const StudentCard = (props) => {
  const { student } = props;
  const { name, description } = student;
  return (
    <li className="student-card">
      <div className="student-details">
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </li>
  );
};

const ReviewCard = (props) => {
  const { review } = props;
  const { name, description } = review;
  return (
    <li className="review-card">
      <h4>{name}</h4>
      <hr />
      <p>{description}</p>
    </li>
  );
};

const Home = () => (
  <CoursesContext.Consumer>
    {({ studentData, reviewsList }) => (
      <div className="main-container">
        <Header />
        <div className="home-page-container">
          <div className="discounts"></div>
          <h3 className="mt-4">Top Students</h3>
          <ul className="top-students-list-container">
            {studentData.map((student) => (
              <li key={student.id}>
                <StudentCard student={student} />
              </li>
            ))}
          </ul>
          <h3 className="mt-4">Reviews</h3>
          <ul className="reviews-list-container">
            {reviewsList.map((review) => (
              <li key={review.name}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    )}
  </CoursesContext.Consumer>
);

export default Home;
