import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "~/components/Image/Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link
      to={`/@${data.nickname}`}
      className={cx("search-item")}
      target="_self"
    >
      <Image src={data.avatar} alt={data.fullname} className={cx("avatar")} />
      <div className={cx("info")}>
        <h4 className={cx("username")}>
          <span>{data.nickname}</span>
          {data.tick && <FaCircleCheck className={cx("tick")} />}
        </h4>
        <span className={cx("name")}>{data.fullname}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
