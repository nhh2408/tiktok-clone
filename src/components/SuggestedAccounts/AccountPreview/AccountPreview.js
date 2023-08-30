import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import { FaCircleCheck } from "react-icons/fa6";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/53881303c76f68356e080348780e1b3c~c5_100x100.jpeg?x-expires=1693530000&x-signature=JrLt0w%2FmZgm7kjt9yIXgU%2F4XmXU%3D"
          className={cx("avatar")}
          alt="ImageAvatar"
        />
        <Button outline2 className={cx("follow-btn")}>
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <div className={cx("title")}>
          <p className={cx("username")}>dustin nguyen</p>
          <FaCircleCheck className={cx("tick")} />
        </div>
        <span className={cx("name")}>hai nguyen</span>
      </div>
      <div className={cx("analytics")}>
        <p>
          <span className={cx("number")}>2.4M</span>
          Followers
        </p>
        <p>
          <span className={cx("number")}>2.4M</span>
          Likes
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
