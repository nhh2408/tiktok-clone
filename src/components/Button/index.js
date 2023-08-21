import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  icon,
  to,
  href,
  target,
  primary = false,
  outline = false,
  outline2 = false,
  upload,
  rounded,
  disabled,
  small,
  large,
  children,
  onClick,
  ...passProps
}) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  let classes = cx("button", {
    primary,
    outline,
    outline2,
    upload,
    rounded,
    disabled,
    small,
    large,
  });
  return (
    <Component className={classes} {...props}>
      {icon}
      <span>{children}</span>
    </Component>
  );
}

export default Button;
