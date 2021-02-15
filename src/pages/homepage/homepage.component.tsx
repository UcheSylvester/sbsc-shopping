import ProductItemsCollection from "../../components/product-items-collection/product-items-collection.component";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <main className="homepage">
      <ProductItemsCollection />
      <ProductItemsCollection />
      <ProductItemsCollection />
    </main>
  );
};

export default HomePage;
