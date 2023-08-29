import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

import Navigation, { NavigationItem } from "./Navigation";
import config from "~/config";
import {
  ExploreIcon,
  ExploreIconActive,
  HomeIcon,
  HomeIconActive,
  LiveIcon,
  LiveIconActive,
  UserGroupIcon,
  UserGroupIconActive,
} from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Navigation>
        <NavigationItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon />}
          iconActive={<HomeIconActive />}
        />
        <NavigationItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          iconActive={<UserGroupIconActive />}
        />
        <NavigationItem
          title="Explore"
          to={config.routes.explore}
          icon={<ExploreIcon />}
          iconActive={<ExploreIconActive />}
        />
        <NavigationItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          iconActive={<LiveIconActive />}
        />
      </Navigation>

      <SuggestedAccounts label="Following accounts" />
      <SuggestedAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
