import "./custom-button.styles.scss";

type Props = {
  onClick: any;
  isDisabled?: boolean;
};

const CustomButton: React.FC<Props> = ({
  children,
  isDisabled,
  ...otherProps
}) => (
  <button className="custom-button" disabled={isDisabled} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
