import { RiShoppingCartLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

import CustomIcon from "../custom-icon/custom-icon.component";
import "./header.styles.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__brand-container">
        <div className="header__brand-container-logo">LOGO</div>

        <h1 className="heading-primary">Acme Store</h1>
      </div>

      <div className="header__icons-container">
        <CustomIcon>
          <BiSearch className="custom-icon__search" />
        </CustomIcon>

        <CustomIcon count={5}>
          <RiShoppingCartLine />
        </CustomIcon>
      </div>
    </header>
  );
};

export default Header;
