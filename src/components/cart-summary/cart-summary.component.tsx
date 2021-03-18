import "./cart-summary.styles.scss";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsTotalDiscount,
  selectCartItemsTotalPrice,
  selectTotal,
} from "../../redux/cart/cart.selector";
import { AppStateTypes } from "../../redux/root.reducer";
import { connect } from "react-redux";
import { formatter } from "../../utils/utils";
import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import usePayment from "../../hooks/use-payment.hook";
import { CartItemProps } from "../../redux/cart/cart.types";

type Props = LinkStateProps;

const CartSummary: React.FC<Props> = ({
  cartTotalPrice,
  cartTotalDiscount,
  total,
  cartItems,
}: Props) => {
  const { initializeFlutterwavePayment } = usePayment({ amount: total });

  return (
    <section className={"cart-summary"}>
      <h3 className="heading-tertiary">CART SUMMARY</h3>

      <div className="cart-summary__item">
        <p className="cart-summary__item--name">Subtotal</p>

        <p className="cart-summary__item--value">
          &#8358; {formatter(cartTotalPrice)}
        </p>
      </div>

      <div className="cart-summary__item">
        <p className="cart-summary__item--name">Discount</p>

        <p className="cart-summary__item--value">
          &#8358; {formatter(cartTotalDiscount)}
        </p>
      </div>

      <div className="cart-summary__item cart-summary__item-total">
        <p className="cart-summary__item--name">Total</p>

        <p className="cart-summary__item--value">&#8358; {formatter(total)}</p>
      </div>

      <CustomButton
        isDisabled={!cartItems?.length}
        onClick={initializeFlutterwavePayment}
      >
        Pay
      </CustomButton>
    </section>
  );
};

type LinkStateProps = {
  cartTotalPrice: number;
  cartTotalDiscount: number;
  cartItems: CartItemProps[];
  total: number;
};

const mapStateToProps = createStructuredSelector<AppStateTypes, LinkStateProps>(
  {
    cartTotalPrice: selectCartItemsTotalPrice,
    cartTotalDiscount: selectCartItemsTotalDiscount,
    total: selectTotal,
    cartItems: selectCartItems,
  },
);

export default connect(mapStateToProps)(CartSummary);
