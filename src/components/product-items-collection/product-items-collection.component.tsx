import ProductItem from "../product-item/product-item.component";
import "./product-items-collection.styles.scss";

const ProductItemsCollection: React.FC = () => {
  return (
    <section className="products-collection">
      <h2 className="heading-secondary products-collection__title">Bag</h2>
      <div className="products-collection__items">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
};

export default ProductItemsCollection;
