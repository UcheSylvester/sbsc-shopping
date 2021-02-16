import { bindActionCreators, Dispatch } from "redux";
import ProductItemsCollection from "../../components/product-items-collection/product-items-collection.component";
import "./homepage.styles.scss";
import { fetchProductsCollectionStartAsync } from "../../redux/products-collection/products-collection.actions";
import { connect } from "react-redux";
import { useEffect } from "react";

type Props = LinkDispatchProps;

const HomePage: React.FC<Props> = ({ fetchProductsCollectionStartAsync }) => {
  useEffect(() => {
    fetchProductsCollectionStartAsync("bag");
  }, []);

  return (
    <main className="homepage">
      <ProductItemsCollection />
      <ProductItemsCollection />
      <ProductItemsCollection />
    </main>
  );
};

type LinkDispatchProps = {
  fetchProductsCollectionStartAsync: (collection: string) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchProps => ({
  fetchProductsCollectionStartAsync: bindActionCreators(
    fetchProductsCollectionStartAsync,
    dispatch
  ),
});

export default connect(null, mapDispatchToProps)(HomePage);
