import { CategoryState } from "../../context/Category.context";
import { Link } from "react-router-dom";
import "./Category.style.scss";
export default function Category() {
  const { setCategory } = CategoryState();
  return (
    <section className="category">
      <Link
        className="category__box"
        to={"/categories/main-course"}
        onClick={() => setCategory("main course")}
      >
        <img
          src="https://images.pexels.com/photos/11776375/pexels-photo-11776375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="category__image"
        />

        <span className="category__title">Main Course</span>
      </Link>

      <Link
        onClick={() => setCategory("side dish")}
        className="category__box"
        to={"categories/side-dishes"}
      >
        <img
          src="https://images.pexels.com/photos/8952662/pexels-photo-8952662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="category__image"
        />

        <span className="category__title">Side dish</span>
      </Link>

      <Link
        onClick={() => setCategory("salad")}
        className="category__box"
        to={"categories/salads"}
      >
        <img
          src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">salad</span>
      </Link>

      <Link
        onClick={() => setCategory("soup")}
        className="category__box"
        to={"categories/soups"}
      >
        <img
          src="https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">soup</span>
      </Link>

      <Link
        onClick={() => setCategory("bread")}
        className="category__box"
        to={"categories/breads"}
      >
        <img
          src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">bread</span>
      </Link>

      <Link
        onClick={() => setCategory("dessert")}
        className="category__box"
        to={"categories/desserts"}
      >
        <img
          src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">Dessert</span>
      </Link>

      <Link
        onClick={() => setCategory("snack")}
        className="category__box"
        to={"categories/snacks"}
      >
        <img
          src="https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="category__image"
        />

        <span className="category__title">snack</span>
      </Link>

      <Link
        onClick={() => setCategory("drink" || "beverage")}
        className="category__box"
        to={"categories/drinks"}
      >
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
