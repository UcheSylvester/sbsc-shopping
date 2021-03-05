import { ProductsCollectionProps } from "../../redux/products-collection/products-collection.types";
import "./product-items-collection.styles.scss";
import { fetchProductsCollectionStartAsync } from "../../redux/products-collection/products-collection.actions";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { useEffect } from "react";
import { AppStateTypes } from "../../redux/root.reducer";
import { selectCollectionByName } from "../../redux/products-collection/products-collection.selector";
import WithState from "../../HOCs/with-state.hoc";
import ProductItems from "./products-items.component";

// Controlling loading and error states using WithState
// Higher Order Component (HOC)
const ProductItemsWithState = WithState(ProductItems);

type HomePageProps = {
  name: string;
  title?: string;
};

type Props = HomePageProps & LinkDispatchProps & LinkStateProps;

const ProductItemsCollection: React.FC<Props> = ({
  name,
  fetchProductsCollectionStartAsync,
  collection,
  title,
}) => {
  const { products, isFetching, errorMessage } = collection || {};

  useEffect(() => {
    // Fetch products collections only when the collection
    // is not existing.
    if (!collection) fetchProductsCollectionStartAsync(name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="products-collection">
      <h2 className="heading-secondary products-collection__title">
        {title || name}
      </h2>
      <div className="products-collection__items">
        <ProductItemsWithState
          isLoading={isFetching}
          errorMessage={errorMessage}
          products={products}
          collectionName={name}
          handleRetry={() => fetchProductsCollectionStartAsync(name)}
        />
      </div>
    </section>
  );
};

type LinkDispatchProps = {
  fetchProductsCollectionStartAsync: (collection: string) => void;
};

type LinkStateProps = {
  collection?: ProductsCollectionProps;
};

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchProps => ({
  fetchProductsCollectionStartAsync: bindActionCreators(
    fetchProductsCollectionStartAsync,
    dispatch
  ),
});

const mapStateToProps = (
  state: AppStateTypes,
  props: HomePageProps
): LinkStateProps => {
  const { name } = props;

  return {
    collection: selectCollectionByName(name)(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItemsCollection);
