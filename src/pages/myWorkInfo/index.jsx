import RealName from "./components/realName";
import StepWrap from "../../component/StepWrap";

export default function MyWorkInfo() {
  return (
    <StepWrap current={1}>
      <RealName />
    </StepWrap>
  );
}
