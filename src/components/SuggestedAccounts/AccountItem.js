import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FaCircleCheck } from "react-icons/fa6";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("account-item")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c31eab57a5edb5de3d44c6ffe716a14d~c5_100x100.jpeg?x-expires=1693490400&x-signature=XzeM1hhV5XdEwG64j%2FT6u%2FGRmc4%3D"
        alt="ImageAccount"
      />
      <div className={cx("info")}>
        <div className={cx("title")}>
          <p className={cx("username")}>dustin nguyen</p>
          <FaCircleCheck className={cx("tick")} />
        </div>
        <span className={cx("name")}>hai nguyen</span>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
