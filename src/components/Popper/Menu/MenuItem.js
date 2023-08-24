import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx("menu-item", {
    separate: data.separate,
  });
  return (
    <Button className={classes} icon={data.icon} to={data.to} onClick={onClick}>
      <span className={cx("item-link")}>{data.title}</span>
    </Button>
  );
}

export default MenuItem;
