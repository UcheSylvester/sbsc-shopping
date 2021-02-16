import "./counter.styles.scss";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

type Props = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
};

const Counter: React.FC<Props> = ({ count, increaseCount, decreaseCount }) => (
  <div className="counter">
    <div className="counter__count">{count}</div>

    <div className="counter__controls">
      <div
        className="counter__control--increase"
        role="button"
        onClick={increaseCount}
      >
        <IoMdArrowDropup />
      </div>

      <div
        className="counter__control--decrease"
        role="button"
        onClick={decreaseCount}
      >
        <IoMdArrowDropdown />
      </div>
    </div>
  </div>
);

export default Counter;
