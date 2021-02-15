import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

import "./product-ratings.styles.scss";

const ProductRatings = () => {
  return (
    <div className="product-ratings">
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <FaStarHalfAlt />
    </div>
  );
};

export default ProductRatings;
