import ProductItemsCollection from "../../components/product-items-collection/product-items-collection.component";
import "./homepage.styles.scss";
import { PRODUCTS_COLLECTION_NAMES } from "../../utils/utils";
import ProductsSlides from "../../components/products-slides/products-slides.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectAllIsFetching } from "../../redux/products-collection/products-collection.selector";
import { AppStateTypes } from "../../redux/root.reducer";

type Props = LinkStateProps;

const HomePage: React.FC<Props> = ({ isLoading }) => {
  console.log({ isLoading });
  return (
    <main className="homepage">
      <ProductsSlides />

      {PRODUCTS_COLLECTION_NAMES.map((name) => (
        <ProductItemsCollection key={name} name={name} />
      ))}
    </main>
  );
};

type LinkStateProps = {
  isLoading: boolean;
};

const mapStateToProps = createStructuredSelector<AppStateTypes, LinkStateProps>(
  {
    isLoading: selectAllIsFetching,
  }
);

export default connect(mapStateToProps)(HomePage);
