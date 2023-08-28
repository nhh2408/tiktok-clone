import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FaCircleXmark, FaSpinner } from "react-icons/fa6";
import HeadlessTippy from "@tippyjs/react/headless";
import { useRef } from "react";
import { useDebounce } from "~/hooks/hooks";

import * as searchServices from "~/services/searchService";
import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper/Popper";
import { SearchIcon } from "~/components/Icons/Icon";
import styles from "./Search.module.scss";

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

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    // Using a wrapper <div> tag around the reference element solves
    // this by crreating a new parentNode context
    <div>
      <HeadlessTippy
        appendTo={() => document.body}
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
              onChange={handleChange}
              onFocus={() => setShowResult(true)}
            />
            <div className={cx("box-btn")}>
              {!!searchValue && !loading && (
                <FaCircleXmark className={cx("clear")} onClick={handleClear} />
              )}
              {loading && <FaSpinner className={cx("loading")} />}
            </div>
            <span className={cx("separate")}></span>
            <button className={cx("btn-search")}>
              <SearchIcon />
            </button>
          </form>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
