import StepWrap from "../../../component/StepWrap";
import RealName from "./components/realName";

export default function MyWorkInfo() {
  return (
    <StepWrap current={1}>
      <RealName />
    </StepWrap>
  );
}
