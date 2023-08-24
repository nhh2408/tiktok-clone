import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import {
  FaCircleXmark,
  FaSpinner,
  FaPlus,
  FaEllipsisVertical,
} from "react-icons/fa6";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import { InboxIcon, MessageIcon, SearchIcon } from "~/components/Icons";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

const SETTING_ITEMS = [
  {
    icon: <img src={images.languageIcon} alt="language icon" />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Vietnamese",
        },
      ],
    },
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
    // button: <a>Hi</a>,
  },
];

function Header() {
  const currentUser = true;
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 2000);
  }, []);

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // Handle change language
        break;
      default:
    }
  };

  const userItems = [
    {
      icon: <img src={images.profileIcon} alt="View profile icon" />,
      title: "View profile",
      to: "/view-profile",
    },
    {
      icon: <img src={images.favoriteIcon} alt="favorites icon" />,
      title: "Favorites",
      to: "/favorites",
    },
    {
      icon: <img src={images.getCoinsIcon} alt="Get Coins icon" />,
      title: "Get Coins",
      to: "/get-coins",
    },
    {
      icon: <img src={images.settingIcon} alt="settings icon" />,
      title: "Settings",
      to: "/settings",
    },
    ...SETTING_ITEMS,
    {
      icon: <img src={images.logoutIcon} alt="log out icon" />,
      title: "Log out",
      to: "/log-out",
      separate: true,
    },
  ];

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
                <SearchIcon />
              </a>
            </form>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Button upload icon={<FaPlus />}>
                Upload
              </Button>
              <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                <button className={cx("action-icon")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx("action-icon")}>
                  <span className={cx("total-inbox")}>33</span>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button upload icon={<FaPlus />}>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userItems : SETTING_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src={images.avatar1}
                alt="avatar"
                className={cx("avatar")}
                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button className={cx("icon-setting")}>
                <FaEllipsisVertical />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
