import "./index.scss";
import StepWrap from "../../../../../component/StepWrap";
import Card from "../../../../../component/Card";
import { Image, Text, View } from "@tarojs/components";
import Identify from "@/src/assets/mpc_identify_picture.png";
import ScreenSvg from "@/src/assets/icon_screen.svg";
import ActionBar from "../../../../../component/ActionBar";

export default function IdentifyPicture() {
  return (
    <StepWrap current={1} title="个人劳动力信息">
      <Card
        title="实名信息"
        extra={
          <View className="text-[#666] text-[30px]">
            <Text className="font-medium text-[#000]">1</Text>
            <Text>/5</Text>
          </View>
        }
      >
        <Text className="text-[28px] mt-[20px]">身份证人像面照片</Text>
        <View className="mt-[26px] rounded-[20px] boreder-2px border-[#999] border-dashed py-[28px] flex flex-col items-center">
          <Image
            className="w-[478px] h-[286px]  boreder-2px border-[#999] border-dashed "
            src={Identify}
          />
          <View className="flex justify-center items-center mt-[28px]">
            <View className="w-[48px] h-[48px] flex justify-center items-center  boreder-2px border-[#999] border-dashed">
              <Image src={ScreenSvg} />
            </View>
            <Text className="ml-[3px] text-[24px] text-[#999]">
              点击进行上传或拍照
            </Text>
          </View>
        </View>
        <View className="text-[#999] text-[24px] mt-[28px]">
          注：上传真实信息能极大提高识别成功率哦～
        </View>
      </Card>
      <ActionBar onNext={() => {}} nextText="下一步" />
    </StepWrap>
  );
}
