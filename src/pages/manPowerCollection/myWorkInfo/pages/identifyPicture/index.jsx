import "./index.scss";
import StepWrap from "../../../../../component/StepWrap";
import Card from "../../../../../component/Card";
import { Text, View } from "@tarojs/components";

export default function IdentifyPicture() {
  return (
    <StepWrap current={1}>
      <Card title="实名信息">
        <Text className="text-[28px] mt-[20px]">身份证人像面照片</Text>
        <View className=""></View>
      </Card>
    </StepWrap>
  );
}
