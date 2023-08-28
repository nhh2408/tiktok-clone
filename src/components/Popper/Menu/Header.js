import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { FaChevronLeft } from "react-icons/fa6";

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx("header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <FaChevronLeft />
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Header;
