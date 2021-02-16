import { ProductItemProps } from "../../redux/products-collection/products-collection.types";
import ProductItem from "../product-item/product-item.component";

type Props = {
  products: ProductItemProps[];
};

const ProductItems: React.FC<Props> = ({ products }) => (
  <>
    {products?.map((product) => (
      <ProductItem key={product?._id} productItem={product} />
    ))}
  </>
);

export default ProductItems;
