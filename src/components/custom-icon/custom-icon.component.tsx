type CustomIconProps = {
  count?: number;
};

const CustomIcon: React.FC<CustomIconProps> = ({ count, children }) => {
  return (
    <div className="custom-icon">
      {children}
      {count ? <p className="count">{count}</p> : null}
    </div>
  );
};

export default CustomIcon;
