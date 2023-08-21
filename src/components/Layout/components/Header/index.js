import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FaSistrix, FaCircleXmark, FaSpinner, FaPlus } from "react-icons/fa6";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import AccountItem from "~/components/AccountItem";
import { PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

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
              <button className={cx("btn-search")}>
                <FaSistrix />
              </button>
            </form>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button upload icon={<FaPlus />}>
            Upload
          </Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
