import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import {
  FaSistrix,
  FaCircleXmark,
  FaSpinner,
  FaPlus,
  FaEllipsisVertical,
} from "react-icons/fa6";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import MenuSetting from "~/components/MenuSetting";

const cx = classNames.bind(styles);

const SETTING_ITEMS = [
  {
    icon: <img src={images.languageIcon} alt="language icon" />,
    title: "English",
  },
  {
    icon: <img src={images.helpIcon} alt="help icon" />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <img src={images.keyboardIcon} alt="keyboard icon" />,
    title: "Keyboard shortcuts",
  },
  {
    icon: <img src={images.moonIcon} alt="moon icon" />,
    title: "Dark mode",
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 2000);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          {/* eslint-disable-next-line */}
          <a href="#" className={cx("logo-link")}>
            <img src={images.logo} alt="logo" />
          </a>
        </div>
        <Tippy
          render={(attrs) => (
            <div className={cx("search-list")} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <div className={cx("title")}>Accounts</div>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
          visible={searchResult.length > 0}
          interactive={true}
        >
          <div className={cx("search")}>
            <form className={cx("form-search")}>
              <input
                type="text"
                placeholder="Search"
                spellCheck={false}
                className={cx("input-field")}
              />
              <div className={cx("box-btn")}>
                <FaCircleXmark className={cx("clear")} />
                <FaSpinner className={cx("loading")} />
              </div>
              <span className={cx("separate")}></span>
              {/* eslint-disable-next-line */}
              <a className={cx("btn-search")}>
                <FaSistrix />
              </a>
            </form>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button upload icon={<FaPlus />}>
            Upload
          </Button>
          <Button primary>Log in</Button>
          <Tippy
            render={(attrs) => (
              <div className={cx("setting-list")} tabIndex={-1} {...attrs}>
                <PopperWrapper>
                  <MenuSetting data={SETTING_ITEMS} />
                </PopperWrapper>
              </div>
            )}
            placement="bottom"
            interactive={true}
          >
            {/* eslint-disable-next-line */}
            <button className={cx("icon-setting")}>
              <FaEllipsisVertical />
            </button>
          </Tippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
