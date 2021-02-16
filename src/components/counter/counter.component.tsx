import "./counter.styles.scss";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Counter = () => {
  return (
    <div className="counter">
      <div className="counter__count">100</div>

      <div className="counter__controls">
        <div className="counter__control--increase" role="button">
          <IoMdArrowDropup />
        </div>

        <div className="counter__control--decrease" role="button">
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};

export default Counter;
