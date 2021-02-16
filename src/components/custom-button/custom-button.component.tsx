import "./custom-button.styles.scss";

type Props = {
  onClick: any;
};

const CustomButton: React.FC<Props> = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
