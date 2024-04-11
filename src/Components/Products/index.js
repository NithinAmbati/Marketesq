import CoursesContext from "../../Context/CoursesContext";
import Header from "../Header";
import { FaRupeeSign } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import "./index.css";

const ProductItem = (props) => {
  const { item } = props;
  const { name, description, price } = item;
  return (
    <>
      <li className="product-card">
        <div className="product-card-text">
          <h3>{name}</h3>
          <p>{description}</p>
          <h3>
            <FaRupeeSign />
            {price}
          </h3>
          <button className="btn btn-dark">Add To Cart</button>
        </div>
      </li>
      <hr />
    </>
  );
};

const Products = () => (
  <CoursesContext.Consumer>
    {({ productsList }) => (
      <div className="main-container">
        <Header />
        <div className="products-page-container">
          <div className="search-container mb-5">
            <CiSearch />
            <input type="search" className="search" placeholder="Search..." />
          </div>
          <ul className="products-list-container">
            {productsList.map((item) => (
              <ProductItem item={item} />
            ))}
          </ul>
        </div>
      </div>
    )}
  </CoursesContext.Consumer>
);

export default Products;
