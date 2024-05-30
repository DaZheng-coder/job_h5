import MenuItem from "../../../../component/menuItem";
import "./index.scss";
import { View } from "@tarojs/components";
import Screen from "../../../../assets/mpc_screen.png";
import Input from "../../../../assets/mpc_input.png";
import OneIn from "../../../../assets/mpc_one_in.png";
import Taro from "@tarojs/taro";

export default function RealName() {
  const items = [
    {
      icon: Screen,
      title: "一键带入",
      subTitle: "快捷输入实名信息",
      onClick: () => {},
      className: "mt",
    },
    {
      icon: Input,
      title: "拍照识别",
      subTitle: "拍照自动识别实名身份",
      onClick: () =>
        Taro.navigateTo({
          url: "pages/myWorkInfo/pages/identifyPicture/index",
        }),
      className: "mt",
    },
    {
      icon: OneIn,
      title: "手动填写",
      subTitle: "手动输入实名信息",
      onClick: () =>
        Taro.navigateTo({
          url: "pages/myWorkInfo/pages/identifyInfo/index",
        }),
      className: "mt",
    },
  ];
  return (
    <View className="real_name">
      {items.map((item) => (
        <MenuItem {...item}></MenuItem>
      ))}
    </View>
  );
}
