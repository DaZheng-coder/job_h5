import { View } from "@tarojs/components";
import "./index.scss";
import StepWrap from "../../../../component/StepWrap";
import { AtCard } from "taro-ui";
import Card from "../../../../component/Card";

export default function IdentifyPicture() {
  return (
    <StepWrap current={1}>
      <Card title="实名信息">1324</Card>
    </StepWrap>
  );
}
