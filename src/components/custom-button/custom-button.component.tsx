import "./custom-button.styles.scss";

const CustomButton: React.FC = ({ children }) => (
  <button className="custom-button">{children}</button>
);

export default CustomButton;
