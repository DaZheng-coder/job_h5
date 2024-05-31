import "./index.scss";
import StepWrap from "../../../../../component/StepWrap";
import Card from "../../../../../component/Card";
import { Text } from "@tarojs/components";

export default function IdentifyPicture() {
  return (
    <StepWrap current={1}>
      <Card title="实名信息">
        <Text>身份证人像面照片</Text>
      </Card>
    </StepWrap>
  );
}
