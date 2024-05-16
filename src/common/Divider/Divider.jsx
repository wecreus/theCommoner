import classNames from "classnames";
import "./Divider.scss";

const Divider = ({ className, children }) => {
  if (!children) {
    return <div className={classNames("divider", className)}></div>;
  }

  return (
    <div className={classNames("divider-group", className)}>
      <div
        className={classNames(
          "divider-group__border",
          "divider-group__border--left"
        )}
      ></div>
      {children}
      <div
        className={classNames(
          "divider-group__border",
          "divider-group__border--right"
        )}
      ></div>
    </div>
  );
};

export default Divider;
