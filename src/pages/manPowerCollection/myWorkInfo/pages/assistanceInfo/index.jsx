import { Text, View } from "@tarojs/components";
import "./index.scss";
import { useMpcData } from "@/src/hooks/useMpcData";
import StepWrap from "@/src/component/StepWrap";
import MCard from "@/src/component/Card";
import MRadioInput from "@/src/component/MRadioInput";
import MSelectPicker from "@/src/component/MSelectPicker";
import MTextInput from "@/src/component/MTextInput";
import ActionBar from "@/src/component/ActionBar";

export default function AssistanceInfo() {
  const { data, handleNext, handleChange, handlePrev } = useMpcData();

  const assistanceType = [
    {
      key: 1,
      title: "持证残疾人家庭",
    },
    {
      key: 2,
      title: "持证低保家庭成员",
    },
    {
      key: 3,
      title: "城镇零就业家庭成员",
    },
    {
      key: 4,
      title: "城镇低收入家庭成员",
    },
  ];

  const relationship = [
    {
      key: 9,
      title: "兄妹",
    },
    {
      key: 7,
      title: "兄弟",
    },
    {
      key: 11,
      title: "姐妹",
    },
    {
      key: 10,
      title: "姐弟",
    },
    {
      key: 1,
      title: "户主本人",
    },
    {
      key: 6,
      title: "母女",
    },
    {
      key: 5,
      title: "母子",
    },
    {
      key: 4,
      title: "父女",
    },
    {
      key: 3,
      title: "父子",
    },
    {
      key: 2,
      title: "配偶",
    },
  ];

  return (
    <StepWrap current={5} title="个人劳动力信息">
      <MCard
        title="援助群体信息"
        extra={
          <View className="text-[#666] text-[30px]">
            <Text className="font-medium text-[#000]">5</Text>
            <Text>/5</Text>
          </View>
        }
      >
        <MRadioInput
          title="是否援助群体"
          radios={[
            { key: 1, title: "是" },
            { key: 0, title: "否" },
          ]}
          selectKey={data["ccc031"] || 0}
          onSelect={(v) => handleChange("ccc031", v)}
        />
        <MSelectPicker
          title="援助群体类型"
          selectKey={
            assistanceType.find((p) => p.key === data["ccc032"])?.title
          }
          selectList={assistanceType}
          onSelect={(v) => handleChange("ccc032", v)}
        />
        <MSelectPicker
          title="与本人关系"
          selectKey={relationship.find((p) => p.key === data["ccc033"])?.title}
          selectList={relationship}
          onSelect={(v) => handleChange("ccc033", v)}
        />
        <MTextInput
          title="残疾人姓名(户主姓名)"
          name="ccc034"
          value={data.ccc034}
          onChange={handleChange}
        />
        <MTextInput
          title="身份证号"
          name="ccc036"
          value={data.ccc036}
          onChange={handleChange}
        />
        <MTextInput
          title="联系电话"
          name="ccc037"
          value={data.ccc037}
          onChange={handleChange}
        />
        <MRadioInput
          title="是否共通居住生活"
          radios={[
            { key: 1, title: "是" },
            { key: 0, title: "否" },
          ]}
          selectKey={data["ccc038"] || 0}
          onSelect={(v) => handleChange("ccc038", v)}
        />
      </MCard>
      <ActionBar
        nextText="提交"
        onNext={() => handleNext("")}
        onPrev={handlePrev}
      />
    </StepWrap>
  );
}
