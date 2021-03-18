import ProductRatings from "../product-ratings/product-ratings.component";
import "./product-item-details.styles.scss";

import { AiFillHeart } from "react-icons/ai";
import Counter from "../counter/counter.component";
import CustomButton from "../custom-button/custom-button.component";
import { ProductItemProps } from "../../redux/products-collection/products-collection.types";
import { PLACEHOLDER_PRODUCT_IMAGE } from "../../utils/utils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartItem } from "../../redux/cart/cart.actions";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {
  product: ProductItemProps | undefined;
};

const ProductItemDetails: React.FC<Props> = ({ product }: Props) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { productImage, name, merchant, description } = product || {};

  // Quantity for adding/removing product to cart
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () =>
    setQuantity((initialValue) => initialValue + 1);
  const decreaseQuantity = () =>
    setQuantity((initialValue) =>
      initialValue === 0 ? initialValue : initialValue - 1,
    );

  useEffect(() => {
    setQuantity(0);
  }, [pathname]);

  // Configuring cartItem
  const cartItem: any = { ...product, quantity };

  const handleUpdateCartItem = () => {
    dispatch(updateCartItem(cartItem));
    toast("Item added to cart successfully!");
  };

  return (
    <section className="product-item-details">
      <div className="product-item-details__image-container">
        <img
          src={productImage || PLACEHOLDER_PRODUCT_IMAGE}
          alt={name}
          loading="lazy"
        />
      </div>

      <div className="product-item-details__info-container">
        <h2 className="product-item-details__title">{name}</h2>
        <p className="product-item-details__store-name">{merchant?.name} </p>

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
          <Counter
            count={quantity}
            increaseCount={increaseQuantity}
            decreaseCount={decreaseQuantity}
          />
          <CustomButton isDisabled={!quantity} onClick={handleUpdateCartItem}>
            Add to Cart
          </CustomButton>
        </div>

        <p
          className="product-item-details__description"
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></p>
      </div>
    </section>
  );
};

export default ProductItemDetails;
