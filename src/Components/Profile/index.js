import CoursesContext from "../../Context/CoursesContext";
import Header from "../Header";

const Profile = () => (
  <CoursesContext.Consumer>
    {({ userDetails }) => {
      return (
        <div className="main-container">
          <Header />
          <div className="profile-page-container">
            <h1>Profile Page</h1>
          </div>
        </div>
      );
    }}
  </CoursesContext.Consumer>
);

export default Profile;
