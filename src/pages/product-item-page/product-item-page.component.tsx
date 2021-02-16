import ProductItemDetails from "../../components/product-item-details/product-item-details.component";
import ProductItemsCollection from "../../components/product-items-collection/product-items-collection.component";
import "./product-item-page.styles.scss";

const ProductItemPage: React.FC = () => {
  return (
    <main className="product-item-page">
      <ProductItemDetails />

      <ProductItemsCollection />
    </main>
  );
};

export default ProductItemPage;
