import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FaCircleCheck } from "react-icons/fa6";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("search-item")}>
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
        alt="avatar"
        className={cx("avatar")}
      />
      <div className={cx("info")}>
        <h4 className={cx("username")}>
          <span>dustin.nguyen</span>
          <FaCircleCheck className={cx("tick")} />
        </h4>
        <span className={cx("name")}>Nguyễn hồng hải</span>
      </div>
    </div>
  );
}

export default AccountItem;
