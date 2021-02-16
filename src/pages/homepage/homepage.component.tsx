import ProductItemsCollection from "../../components/product-items-collection/product-items-collection.component";
import "./homepage.styles.scss";
import { PRODUCTS_COLLECTION_NAMES } from "../../utils/utils";

const HomePage: React.FC = () => {
  return (
    <main className="homepage">
      {PRODUCTS_COLLECTION_NAMES.map((name) => (
        <ProductItemsCollection key={name} name={name} />
      ))}
    </main>
  );
};

export default HomePage;
