import { useHistory } from "react-router-dom";
import { ProductItemProps } from "../../redux/products-collection/products-collection.types";
import { formatter, PLACEHOLDER_PRODUCT_IMAGE } from "../../utils/utils";

import "./product-item.styles.scss";

type Props = {
  productItem: ProductItemProps;
  collectionName: string;
};

const ProductItem: React.FC<Props> = ({
  productItem,
  collectionName,
}: Props) => {
  const history = useHistory();

  const { productImage, name, selling_price, merchant, slug } =
    productItem || {};

  return (
    <article
      className="product-item"
      onClick={() => history.push(`/${collectionName}/${slug}`)}
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

          {/* <ProductRatings /> */}
        </div>

        <div className="product-item__details--bottom">
          <p className="product-item__price">
            &#8358; {formatter(selling_price || 0)}
          </p>
          <p className="product-item__store">{merchant?.name}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
