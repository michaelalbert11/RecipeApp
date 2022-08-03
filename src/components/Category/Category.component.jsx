import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Category.style.scss";
// import { CategoryContext } from "../../pages/Category.page";
export default function Category() {
  // const { filterArray } = useContext(CategoryContext);
  return (
    <section className="category">
      <Link
        // onClick={() => filterArray("main course")}
        className="category__box"
        to={"/main-courses"}
      >
        <img
          src="https://images.pexels.com/photos/11776375/pexels-photo-11776375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="category__image"
        />

        <span className="category__title">Main Course</span>
      </Link>

      <Link className="category__box" to={"/side-dishes"}>
        <img
          src="https://images.pexels.com/photos/8952662/pexels-photo-8952662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="category__image"
        />

        <span className="category__title">Side dish</span>
      </Link>

      <Link className="category__box" to={"/salads"}>
        <img
          src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">salad</span>
      </Link>

      <Link className="category__box" to={"/soups"}>
        <img
          src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">soup</span>
      </Link>

      <Link className="category__box" to={"/breads"}>
        <img
          src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">bread</span>
      </Link>

      <Link className="category__box" to={"/deserts"}>
        <img
          src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">Desert</span>
      </Link>

      <Link className="category__box" to={"snacks"}>
        <img
          src="https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">snack</span>
      </Link>

      <Link className="category__box" to={"drinks"}>
        <img
          src="https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">drink</span>
      </Link>
    </section>
  );
}
