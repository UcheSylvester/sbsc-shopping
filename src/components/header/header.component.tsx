import { RiShoppingCartLine } from "react-icons/ri";

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
          <RiShoppingCartLine className="custom-icon__icon" />
        </CustomIcon>
      </div>
    </header>
  );
};

export default Header;
