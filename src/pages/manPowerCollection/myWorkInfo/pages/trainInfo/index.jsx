import { Text, View } from "@tarojs/components";
import "./index.scss";
import StepWrap from "@/src/component/StepWrap";
import MCard from "@/src/component/Card";
import ActionBar from "@/src/component/ActionBar";
import { useMpcData } from "@/src/hooks/useMpcData";
import MRadioInput from "@/src/component/MRadioInput";
import MDrawerPicker from "@/src/component/MDrawerPicker";
import MTextInput from "@/src/component/MTextInput";
import MDatePicker from "@/src/component/MDatePicker";

export default function TrainInfo() {
  const { data, handleNext, handleChange, handlePrev } = useMpcData();

  return (
    <StepWrap current={4} title="个人劳动力信息">
      <MCard
        title="培训信息"
        extra={
          <View className="text-[#666] text-[30px]">
            <Text className="font-medium text-[#000]">4</Text>
            <Text>/5</Text>
          </View>
        }
      >
        <MRadioInput
          title="是否参加过技能培训"
          radios={[
            { key: 1, title: "是" },
            { key: 0, title: "否" },
          ]}
          selectKey={data["ccc025"] || 0}
          onSelect={(v) => handleChange("ccc025", v)}
        />
        {!!data.ccc025 ? (
          <>
            <MDrawerPicker
              title={"培训专业"}
              subTitle="选择专业"
              value={data.ccc028}
              lList={[]}
              rList={[]}
            />
            <MTextInput
              title="培训机构"
              name="ccc029"
              value={data.ccc029}
              onChange={handleChange}
            />
            <MDatePicker name="ccc030" title="培训年度" />
          </>
        ) : (
          <>
            <MDrawerPicker
              title={"培训意愿"}
              subTitle="选择专业"
              value={data.ccc027}
              lList={[]}
              rList={[]}
            />
          </>
        )}
      </MCard>
      <ActionBar
        onNext={() =>
          handleNext(
            "pages/manPowerCollection/myWorkInfo/pages/assistanceInfo/index"
          )
        }
        onPrev={handlePrev}
      />
    </StepWrap>
  );
}
