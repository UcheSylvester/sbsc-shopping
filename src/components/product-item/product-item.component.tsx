import { useHistory } from "react-router-dom";
import { ProductItemProps } from "../../redux/products-collection/products-collection.types";
import { PLACEHOLDER_PRODUCT_IMAGE } from "../../utils/utils";
import ProductRatings from "../product-ratings/product-ratings.component";

import "./product-item.styles.scss";

type Props = {
  productItem: ProductItemProps;
};

const ProductItem: React.FC<Props> = ({ productItem }) => {
  const history = useHistory();

  const { productImage, name, selling_price, merchant } = productItem || {};

  return (
    <article
      className="product-item"
      onClick={() => history.push("/bag/vintage_bag")}
    >
      <img
        src={productImage || PLACEHOLDER_PRODUCT_IMAGE}
        alt={name}
        className="product-item__image"
        loading="lazy"
      />

      <div className="product-item__details">
        <div className="product-item__details--top">
          <h3 className="heading-tertiary">{name}</h3>

          <ProductRatings />
        </div>

        <div className="product-item__details--bottom">
          <p className="product-item__price">{selling_price}</p>
          <p className="product-item__store">{merchant?.name}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
