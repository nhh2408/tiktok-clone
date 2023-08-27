import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FaCircleXmark, FaSpinner } from "react-icons/fa6";
import HeadlessTippy from "@tippyjs/react/headless";

import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { SearchIcon } from "~/components/Icons";
import styles from "./Search.module.scss";
import { useRef } from "react";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounced = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounced
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setSearchResult(res.data);
      });
  }, [debounced]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      onClickOutside={handleHideResult}
      visible={showResult && searchResult.length > 0}
      interactive={true}
      render={(attrs) => (
        <div className={cx("search-list")} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <div className={cx("title")}>Accounts</div>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx("search")}>
        <form className={cx("form-search")}>
          <input
            ref={inputRef}
            value={searchValue}
            type="text"
            placeholder="Search"
            spellCheck={false}
            className={cx("input-field")}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />
          <div className={cx("box-btn")}>
            {!!searchValue && !loading && (
              <FaCircleXmark className={cx("clear")} onClick={handleClear} />
            )}
            {loading && <FaSpinner className={cx("loading")} />}
          </div>
          <span className={cx("separate")}></span>
          {/* eslint-disable-next-line */}
          <a className={cx("btn-search")}>
            <SearchIcon />
          </a>
        </form>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
