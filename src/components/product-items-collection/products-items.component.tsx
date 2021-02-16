import { ProductItemProps } from "../../redux/products-collection/products-collection.types";
import ProductItem from "../product-item/product-item.component";

type Props = {
  products: ProductItemProps[];
  collectionName: string;
};

const ProductItems: React.FC<Props> = ({ products, collectionName }) => (
  <>
    {products?.map((product) => (
      <ProductItem
        collectionName={collectionName}
        key={product?._id}
        productItem={product}
      />
    ))}
  </>
);

export default ProductItems;
