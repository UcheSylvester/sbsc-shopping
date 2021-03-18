import ProductItemsCollection from "../../components/product-items-collection/product-items-collection.component";
import "./homepage.styles.scss";
import { PRODUCTS_COLLECTION_NAMES } from "../../utils/utils";
import React from "react";

const HomePage: React.FC = () => (
  <main className="homepage">
    {PRODUCTS_COLLECTION_NAMES.map((name) => (
      <ProductItemsCollection key={name} name={name} />
    ))}
  </main>
);

export default HomePage;
