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
import PersonalCenter from "./personalCenter";
import Taro from "@tarojs/taro";
export default function MainPowerCollection() {
  const handleBack = () => Taro.navigateBack();
  const [activeKey, setActiveKey] = useState("home");

  return (
    <View className="container">
      <AtNavBar
        color="#000"
        onClickLeftIcon={handleBack}
        title={activeKey === "home" ? "首页" : "个人中心"}
        leftIconType="chevron-left"
        fixed
      />
      {activeKey === "home" ? <Home /> : <PersonalCenter />}
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
