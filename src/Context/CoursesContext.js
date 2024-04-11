import { createContext } from "react";

const CoursesContext = createContext({
  studentData: [],
  reviewsList: [],
  videosList: [],
  aboutUsList: [],
  productsList: [],
  registeredStudents: [],
  setRegisteredStudents: () => {},
});

export default CoursesContext;
