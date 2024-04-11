import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home";
import "./App.css";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import Classes from "./Components/Classes";
import CoursesContext from "./Context/CoursesContext";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    password: "password123",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    marks_scored: 85,
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    password: "p@ssw0rd",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    marks_scored: 78,
  },
  {
    id: 3,
    name: "Michael Johnson",
    username: "michaelj",
    password: "securePassword",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco labori.",
    marks_scored: 92,
  },
  {
    id: 4,
    name: "Emily Brown",
    username: "emilyb",
    password: "strongPassword123",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esser.",
    marks_scored: 65,
  },
  {
    id: 5,
    name: "David Wilson",
    username: "davidw",
    password: "david123",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    marks_scored: 88,
  },
  {
    id: 6,
    name: "Sarah Johnson",
    username: "sarahj",
    password: "sarahpassword",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
    marks_scored: 70,
  },
  {
    id: 7,
    name: "James Lee",
    username: "jamesl",
    password: "leeJames",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
    marks_scored: 82,
  },
  {
    id: 8,
    name: "Emma Garcia",
    username: "emmag",
    password: "emma1234",
    description:
      "Nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt.",
    marks_scored: 95,
  },
  {
    id: 9,
    name: "Daniel Martinez",
    username: "danm",
    password: "martinez1",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
    marks_scored: 75,
  },
  {
    id: 10,
    name: "Olivia Brown",
    username: "oliviab",
    password: "brownOlivia",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    marks_scored: 87,
  },
];

const reviewsList = [
  {
    name: "John Smith",
    description: "Excellent product, very satisfied with the quality!",
  },
  {
    name: "Emily Johnson",
    description: "Great service, fast delivery, highly recommended.",
  },
  {
    name: "Michael Davis",
    description: "Impressed with the customer support, they were very helpful.",
  },
  {
    name: "Sarah Brown",
    description: "The product exceeded my expectations, will buy again.",
  },
  {
    name: "David Wilson",
    description: "Good value for money, I'm happy with my purchase.",
  },
];

const videosList = [
  {
    title: "Sample Video Title",
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    title: "Sample Video Title",
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    title: "Sample Video Title",
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    title: "Sample Video Title",
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    title: "Sample Video Title",
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    title: "Sample Video Title",
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
];

const aboutUsList = [
  {
    id: 1,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 2,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 3,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 4,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
];

const productsList = [
  {
    id: 1,
    name: "Product Name",
    price: 1500,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 2,
    name: "Product Name",
    price: 1500,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 3,
    name: "Product Name",
    price: 1500,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 4,
    name: "Product Name",
    price: 1500,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 5,
    name: "Product Name",
    price: 1500,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 6,
    name: "Product Name",
    price: 1500,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 7,
    name: "Product Name",
    price: 1500,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 8,
    name: "Product Name",
    price: 1500,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 9,
    name: "Product Name",
    price: 1500,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
  {
    id: 10,
    name: "Product Name",
    price: 1500,
    description:
      "Lorem Inpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever insce the 1500's, when an unkown printer took a galley of type and scrambled it to make a tyupe specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaing essentially unchanged.",
  },
];

const registeredStudentsList = [
  {
    username: "Nithin_Ambati",
    email: "nithinambati9@gmail.com",
    password: "nithin123",
  },
  {
    username: "Srivani_Ganji",
    email: "srivaniganji2805@gmail.com",
    password: "srivani123",
  },
];

function App() {
  const [registeredStudents, setRegisteredStudents] = useState(
    registeredStudentsList
  );

  return (
    <CoursesContext.Provider
      value={{
        studentData: data,
        reviewsList,
        videosList,
        aboutUsList,
        productsList,
        registeredStudents,
        setRegisteredStudents,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/sign-up" Component={SignUp} />
          <Route exact path="/cart" Component={Cart} />
          <Route exact path="/profile" Component={Profile} />
        </Routes>
      </BrowserRouter>
    </CoursesContext.Provider>
  );
}

export default App;
