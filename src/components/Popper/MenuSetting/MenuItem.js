import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from "./MenuSetting.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Button className={cx("setting-item")} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
