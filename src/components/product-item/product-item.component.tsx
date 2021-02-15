import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

import "./product-item.styles.scss";

const ProductItem = () => {
  return (
    <section className="product-item">
      <img
        src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        alt="product"
        className="product-item__image"
      />

      <div className="product-item__details">
        <div className="product-item__details--top">
          <h2 className="heading-secondary product-item-title">Vintage Bag</h2>

          <div className="product-item__ratings">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
          </div>
        </div>

        <div className="product-item__details--bottom">
          <p className="product-item__price">50 USD</p>
          <p className="product-item__store">Scrader Store</p>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
