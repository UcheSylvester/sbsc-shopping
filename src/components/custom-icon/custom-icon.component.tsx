import "./custom-icon.styles.scss";

type CustomIconProps = {
  count?: number;
};

const CustomIcon: React.FC<CustomIconProps> = ({ count, children }) => {
  return (
    <div className="custom-icon">
      {children}
      {count ? <div className="custom-icon__count">{count}</div> : null}
    </div>
  );
};

export default CustomIcon;