import classNames from "classnames/bind";
import { FaSistrix } from "react-icons/fa6";
import {
  FaCircleXmark,
  FaPlus,
  FaRegPaperPlane,
  FaRegMessage,
  FaSpinner,
} from "react-icons/fa6";
import styles from "./Header.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          {/* eslint-disable-next-line */}
          <a href="#" className={cx("logo-link")}>
            <img src={images.logo} alt="logo" />
          </a>
        </div>
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
        <div className={cx("actions")}>
          <button className={cx("btn-upload")}>
            <FaPlus />
            <span>Tải lên</span>
          </button>
          {/* eslint-disable-next-line */}
          <a href="#" className={cx("btn-message")}>
            <FaRegPaperPlane />
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className={cx("btn-mailbox")}>
            <FaRegMessage />
            <span></span>
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" className={cx("btn-account")}></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
