import CoursesContext from "../../Context/CoursesContext";
import Header from "../Header";
import { FaRupeeSign } from "react-icons/fa";
import "./index.css";

const Cart = () => (
  <CoursesContext.Consumer>
    {({ userOrdersList }) => {
      return (
        <div className="main-container">
          <Header />
          <div className="cart-page-container">
            <div className="cart-container">
              <div className="cart-top-container">
                <h1>
                  Total:
                  <FaRupeeSign />
                  2000
                </h1>
                <button className="btn btn-dark">CHECKOUT</button>
              </div>
              <hr/>

              <div className="carts-list-container">
                <div className="cart-item">
                  <div>
                    <h3>QUESTION TITLE</h3>
                    <p>
                      <span>MODULE</span>: NAME OF MODULE{" "}
                    </p>
                    <p>
                      <span>DATE</span>: 10/04/2021
                    </p>
                  </div>
                  <div className="d-flex flex-column w-25">
                    <select className="mb-3 btn btn-dark">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                    <button className="btn btn-dark">DELETE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }}
  </CoursesContext.Consumer>
);

export default Cart;
