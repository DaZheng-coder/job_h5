import { View } from "@tarojs/components";
import { AtNavBar } from "taro-ui";
import "./index.scss";
import BottomBar from "../../component/BottomBar";
import HomeSvg from "../../assets/mpc_home.svg";
import HomeActiveSvg from "../../assets/mpc_home_active.svg";
import UserSvg from "../../assets/mpc_user.svg";
import UserActiveSvg from "../../assets/mpc_user_active.svg";

import { useState } from "react";
import Home from "./components/Home";

export default function MainPowerCollection() {
  const handleBack = () => {};
  const [activeKey, setActiveKey] = useState("home");

  return (
    <View className="container">
      <AtNavBar
        color="#000"
        onClickLeftIcon={handleBack}
        title="首页"
        leftIconType="chevron-left"
      />
      <Home />
      <BottomBar
        items={[
          {
            key: "home",
            icon: HomeSvg,
            activeIcon: HomeActiveSvg,
            title: "首页",
            onClick: () => setActiveKey("home"),
          },
          {
            key: "user",
            icon: UserSvg,
            activeIcon: UserActiveSvg,
            title: "个人中心",
            onClick: () => setActiveKey("user"),
          },
        ]}
        activeKey={activeKey}
      />
    </View>
  );
}
