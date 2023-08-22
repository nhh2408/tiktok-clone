import classNames from "classnames/bind";
import styles from "./MenuSetting.module.scss";

const cx = classNames.bind(styles);

function MenuSetting({ data }) {
  return data.map((item, index) => (
    <button key={index} className={cx("setting-item")}>
      <span className={cx("setting-icon")}>{item.icon}</span>
      <h3 className={cx("setting-title")}>{item.title}</h3>
    </button>
  ));
}

export default MenuSetting;
