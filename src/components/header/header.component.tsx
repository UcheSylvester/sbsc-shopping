import { RiShoppingCartLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

import CustomIcon from "../custom-icon/custom-icon.component";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { AppStateTypes } from "../../redux/root.reducer";
import { selectCartItemCount } from "../../redux/cart/cart.selector";
import { connect } from "react-redux";

import LogoImage from "../../assets/images/scrader.png";

type Props = LinkStateProps;

const Header: React.FC<Props> = ({ cartItemsCount }) => (
  <header className="header">
    <div className="header__brand-container">
      <Link className="header__logo" to="/">
        <img src={LogoImage} alt="Scrader logo" />
      </Link>

      <h1 className="heading-primary">Acme Store</h1>
    </div>

    <div className="header__icons-container">
      <CustomIcon>
        <BiSearch className="custom-icon__search" />
      </CustomIcon>

      <CustomIcon count={cartItemsCount}>
        <RiShoppingCartLine />
      </CustomIcon>
    </div>
  </header>
);

type LinkStateProps = {
  cartItemsCount: number;
};

const mapStateToProps = createStructuredSelector<AppStateTypes, LinkStateProps>(
  {
    cartItemsCount: selectCartItemCount,
  }
);

export default connect(mapStateToProps)(Header);
