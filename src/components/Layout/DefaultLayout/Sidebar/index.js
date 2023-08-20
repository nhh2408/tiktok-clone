import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </aside>
  );
}

export default Sidebar;
