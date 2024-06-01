import MSelectPicker from "@/src/component/MSelectPicker";
import StepWrap from "../../../component/StepWrap";
import RealName from "./components/realName";
import MTextInput from "@/src/component/MTextInput";
import MDrawerPicker from "@/src/component/MDrawerPicker";
import MRadioInput from "@/src/component/MRadioInput";

export default function MyWorkInfo() {
  const list = [
    {
      key: 1,
      title: "1",
    },
    {
      key: 2,
      title: "2",
    },
  ];
  return (
    <StepWrap current={1}>
      <RealName />
    </StepWrap>
  );
}
