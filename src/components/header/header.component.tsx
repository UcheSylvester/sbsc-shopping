import { RiShoppingCartLine } from "react-icons/ri";

import CustomIcon from "../custom-icon/custom-icon.component";
import "./header.styles.scss";
import { Link, useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { AppStateTypes } from "../../redux/root.reducer";
import { selectCartItemCount } from "../../redux/cart/cart.selector";
import { connect } from "react-redux";
import LogoImage from "../../assets/images/logo.png";

import React from "react";

type Props = LinkStateProps;

const Header: React.FC<Props> = ({ cartItemsCount }: Props) => {
  const history = useHistory();

  return (
    <header className="header">
      <Link to="/">
        <h1 className="heading-primary">
          SBSC <br /> Shopping
        </h1>
      </Link>

      <Link className="header__logo" to="/">
        <img src={LogoImage} alt="Brand logo" />
      </Link>

      <CustomIcon count={cartItemsCount} onClick={() => history.push(`/cart`)}>
        <RiShoppingCartLine />
      </CustomIcon>
    </header>
  );
};

type LinkStateProps = {
  cartItemsCount: number;
};

const mapStateToProps = createStructuredSelector<AppStateTypes, LinkStateProps>(
  {
    cartItemsCount: selectCartItemCount,
  },
);

export default connect(mapStateToProps)(Header);
