import "./index.scss";
import StepWrap from "../../../../../component/StepWrap";
import MCard from "../../../../../component/Card";
import { Image, Text, View } from "@tarojs/components";
import IdentifyDefaultPicture from "@/src/assets/mpc_identify_picture.png";
import ScreenSvg from "@/src/assets/icon_screen.svg";
import ActionBar from "../../../../../component/ActionBar";
import { useStore } from "@/src/store";
import Taro from "@tarojs/taro";
import IdentifyCard from "@/src/component/IdentifyCard";

export default function IdentifyPicture() {
  const manPower = useStore((state) => state.manPower);
  const updateManPower = useStore((state) => state.updateManPower);
  return (
    <StepWrap current={1} title="个人劳动力信息">
      <IdentifyCard />
      <ActionBar
        onNext={() =>
          Taro.navigateTo({
            url: "pages/manPowerCollection/myWorkInfo/pages/baseInfo/index",
          })
        }
        nextText="下一步"
      />
    </StepWrap>
  );
}
