import { ProductsCollectionProps } from "../../redux/products-collection/products-collection.types";
import ProductItem from "../product-item/product-item.component";
import "./product-items-collection.styles.scss";
import { fetchProductsCollectionStartAsync } from "../../redux/products-collection/products-collection.actions";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { useEffect } from "react";
import { AppStateTypes } from "../../redux/root.reducer";
import { selectCollectionByName } from "../../redux/products-collection/products-collection.selector";

type HomePageProps = {
  name: string;
};

type Props = HomePageProps & LinkDispatchProps & LinkStateProps;

const ProductItemsCollection: React.FC<Props> = ({
  name,
  fetchProductsCollectionStartAsync,
  collection,
}) => {
  const { products } = collection || {};

  useEffect(() => {
    fetchProductsCollectionStartAsync(name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({ collection });

  return (
    <section className="products-collection">
      <h2 className="heading-secondary products-collection__title">{name}</h2>
      <div className="products-collection__items">
        {products?.map((product) => (
          <ProductItem key={product?._id} productItem={product} />
        ))}
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
