import { RiShoppingCartLine } from "react-icons/ri";

import CustomIcon from "../custom-icon/custom-icon.component";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { AppStateTypes } from "../../redux/root.reducer";
import { selectCartItemCount } from "../../redux/cart/cart.selector";
import { connect } from "react-redux";

import React from "react";

type Props = LinkStateProps;

const Header: React.FC<Props> = ({ cartItemsCount }: Props) => (
  <header className="header">
    <h1 className="heading-primary">
      SBSC <br /> Shopping
    </h1>

    <Link className="header__logo" to="/">
      <img
        src={"http://www.sbsc.com/wp-content/uploads/2017/01/logo-1.png"}
        alt="Brand logo"
      />
    </Link>

    <CustomIcon count={cartItemsCount}>
      <RiShoppingCartLine />
    </CustomIcon>
  </header>
);

type LinkStateProps = {
  cartItemsCount: number;
};

const mapStateToProps = createStructuredSelector<AppStateTypes, LinkStateProps>(
  {
    cartItemsCount: selectCartItemCount,
  },
);

export default connect(mapStateToProps)(Header);
