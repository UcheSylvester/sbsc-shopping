import ProductRatings from "../product-ratings/product-ratings.component";
import "./product-item-details.styles.scss";

import { AiFillHeart } from "react-icons/ai";
import Counter from "../counter/counter.component";
import CustomButton from "../custom-button/custom-button.component";

const ProductItemDetails: React.FC = () => {
  return (
    <section className="product-item-details">
      <div className="product-item-details__image-container">
        <img
          src="https://image.shutterstock.com/image-photo/red-elegant-female-bag-two-260nw-1032419707.jpg"
          alt="product"
          loading="lazy"
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

        <p className="product-item-details__likers">
          Liked by batman, han solo and others
        </p>

        <div className="product-item-details__variations">
          <input type="radio" value="large" id="size-large" />{" "}
          <label htmlFor="size-large">Size L</label>
          <input type="radio" value="medium" id="size-medium" />{" "}
          <label htmlFor="size-medium">Size M</label>
        </div>

        <div className="product-item-details__cart">
          Qty
          <Counter />
          <CustomButton>Add to Cart</CustomButton>
        </div>

        <p className="product-item-details__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla
          iusto exercitationem, vitae numquam possimus culpa aliquam impedit
          voluptatem voluptate porro explicabo
        </p>
      </div>
    </section>
  );
};

export default ProductItemDetails;
