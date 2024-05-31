import { Image, View } from "@tarojs/components";
import "./index.scss";
import MenuItem from "../../../../component/menuItem";
import MpcIcon from "../../../../assets/mpc_index_icon.png";
import CoverImg from "../../../../assets/mpc_index_cover.png";
import CoverText from "../../../../assets/mpc_index_text.png";
import Taro from "@tarojs/taro";

export default function Home() {
  return (
    <>
      <View className="container-cover">
        <Image src={CoverImg} className="container-cover-img" />
        <Image src={CoverText} className="container-cover-text" />
      </View>
      <MenuItem
        title="个人劳动力收集"
        subTitle="输入您的劳动力收集信息"
        icon={MpcIcon}
        onClick={() => Taro.navigateTo({ url: "/pages/manPowerCollection/myWorkInfo/index" })}
      />
    </>
  );
}
