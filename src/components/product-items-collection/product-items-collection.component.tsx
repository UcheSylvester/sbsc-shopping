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

// Controlling loading and error states using WithState Higher Order Component (HOC)
const ProductItemsWithState = WithState(ProductItems);

type HomePageProps = {
  name: string;
};

type Props = HomePageProps & LinkDispatchProps & LinkStateProps;

const ProductItemsCollection: React.FC<Props> = ({
  name,
  fetchProductsCollectionStartAsync,
  collection,
}) => {
  const { products, isFetching, errorMessage } = collection || {};

  useEffect(() => {
    if (!collection) fetchProductsCollectionStartAsync(name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ collection });

  return (
    <section className="products-collection">
      <h2 className="heading-secondary products-collection__title">{name}</h2>
      <div className="products-collection__items">
        <ProductItemsWithState
          isLoading={isFetching}
          errorMessage={errorMessage}
          products={products}
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
