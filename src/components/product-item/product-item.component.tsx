import { useHistory } from "react-router-dom";
import ProductRatings from "../product-ratings/product-ratings.component";

import "./product-item.styles.scss";

const ProductItem = () => {
  const history = useHistory();
  return (
    <article
      className="product-item"
      onClick={() => history.push("/bag/vintage_bag")}
    >
      <img
        src="https://image.shutterstock.com/image-photo/red-elegant-female-bag-two-260nw-1032419707.jpg"
        alt="product"
        className="product-item__image"
        loading="lazy"
      />

      <div className="product-item__details">
        <div className="product-item__details--top">
          <h3 className="heading-tertiary">Vintage Bag</h3>

          <ProductRatings />
        </div>

        <div className="product-item__details--bottom">
          <p className="product-item__price">50 USD</p>
          <p className="product-item__store">Scrader Store</p>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
