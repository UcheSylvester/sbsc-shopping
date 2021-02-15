import ProductItemDetails from "../../components/product-item-details/product-item-details.component";
import "./product-item-page.styles.scss";

const ProductItemPage: React.FC = () => {
  return (
    <main className="product-item-page">
      <ProductItemDetails />
    </main>
  );
};

export default ProductItemPage;
