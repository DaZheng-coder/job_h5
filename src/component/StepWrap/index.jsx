import { View } from "@tarojs/components";
import "./index.scss";
import { AtNavBar } from "taro-ui";
import Taro from "@tarojs/taro";
import Steps from "../Steps";
import { useState } from "react";
import RealName from "../../pages/myWorkInfo/components/realName";

export default function StepWrap({ current, children }) {
  return (
    <View className="my_work_info_wrap">
      <AtNavBar
        color="#000"
        onClickLeftIcon={() => Taro.navigateBack()}
        title="个人劳动力信息"
        leftIconType="chevron-left"
      />
      <Steps
        steps={[
          {
            key: 1,
            title: "实名信息",
          },
          {
            key: 2,
            title: "基本信息",
          },
          {
            key: 3,
            title: "就业信息",
          },
          {
            key: 4,
            title: "培训信息",
          },
          {
            key: 5,
            title: "援助群体信息",
          },
        ]}
        current={current}
      />
      {children}
    </View>
  );
}