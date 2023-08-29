import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

function NavigationItem({ title, to, icon, iconActive }) {
  return (
    <NavLink className={(nav) => cx("nav-item")} to={to}>
      {({ isActive }) => (
        <>
          {isActive ? iconActive : icon}
          <span className={cx("nav-title")}>{title}</span>
        </>
      )}
    </NavLink>
  );
}

NavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default NavigationItem;
