import "./cart-items-collection.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { connect } from "react-redux";
import { AppStateTypes } from "../../redux/root.reducer";
import { CartItemProps } from "../../redux/cart/cart.types";
import React from "react";

type Props = LinkStateProps;

const CartItemsCollection: React.FC<Props> = ({ cartItems }: Props) => {
  console.log({ cartItems: cartItems });

  return (
    <section className="cart-items-collection">
      <h2 className="heading-secondary">CART</h2>
      <div className="cart-items-collection__summary">30 items | $200</div>

      {cartItems.map((cartItem) => (
        <CartItem key={cartItem?._id} cartItem={cartItem} />
      ))}
    </section>
  );
};

type LinkStateProps = {
  cartItems: CartItemProps[];
};

const mapStateToProps = createStructuredSelector<AppStateTypes, LinkStateProps>(
  {
    cartItems: selectCartItems,
  },
);

export default connect(mapStateToProps)(CartItemsCollection);
