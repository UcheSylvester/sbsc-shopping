import "./custom-icon.styles.scss";
import React from "react";

type CustomIconProps = {
  count?: number;
  children?: React.ReactNode;
};

const CustomIcon: React.FC<CustomIconProps> = ({
  count,
  children,
}: CustomIconProps) => (
  <div className="custom-icon">
    {children}
    {count === 0 || count ? (
      <div className="custom-icon__count">{count}</div>
    ) : null}
  </div>
);

export default CustomIcon;
