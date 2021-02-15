import ProductRatings from "../product-ratings/product-ratings.component";
import "./product-item-details.styles.scss";

import { AiFillHeart } from "react-icons/ai";

const ProductItemDetails = () => {
  return (
    <section className="product-item-details">
      <div className="product-item-details__image-container">
        <img
          src="https://image.shutterstock.com/image-photo/red-elegant-female-bag-two-260nw-1032419707.jpg"
          alt="product"
        />
      </div>

      <div className="product-item-details__info-container">
        <h2 className="product-item-details__title">Vintage Bag</h2>
        <p className="product-item-details__store-name">Scrader store</p>

        <div className="product-item-details__ratings-reviews">
          <ProductRatings />

          <p className="product-item-details__reviews">30,000 reviews</p>
        </div>

        <div className="product-item-details__likes-avatars">
          <div className="product-item-details__likes">
            <AiFillHeart />{" "}
            <p className="product-item-details__likes-count">40,000 Likes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItemDetails;
