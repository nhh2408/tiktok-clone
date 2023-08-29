import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";

import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("label")}>{label}</h2>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <button className={cx("more-btn")}>
        <p>See more</p>
      </button>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
