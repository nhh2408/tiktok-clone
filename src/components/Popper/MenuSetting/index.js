import classNames from "classnames/bind";
import { PopperWrapper } from "..";
import Tippy from "@tippyjs/react/headless";
import styles from "./MenuSetting.module.scss";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function MenuSetting({ children, items = [] }) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom"
      render={(attrs) => (
        <div className={cx("setting-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("setting-popper")}>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default MenuSetting;
