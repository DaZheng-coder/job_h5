import { Picker, Text, View } from "@tarojs/components";
import "./index.scss";
import StepWrap from "../../../../../component/StepWrap";
import Card from "../../../../../component/Card";
import { AtForm, AtInput, AtRadio } from "taro-ui";
import { useState } from "react";
import TextInput from "../../../../../component/TextInput";
import InputPicker from "../../../../../component/InputPicker";
import SelectList from "../../../../../component/SelectList";
import { Cascader, Radio } from "react-vant";
import Taro from "@tarojs/taro";
import ActionBar from "../../../../../component/ActionBar";

export default function IdentifyInfo() {
  const [data, setData] = useState({});
  const handleChange = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };
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
        <AtForm className="mt-[20px]">
          <TextInput
            name="aac003"
            title="姓名"
            data={data}
            onChange={handleChange}
          />
          <TextInput
            name="aac147"
            title="身份证号码"
            data={data}
            onChange={handleChange}
          />
          <TextInput
            name="ccc037"
            title="联系人手机号码"
            data={data}
            onChange={handleChange}
          />
          <InputPicker
            name="aac024"
            title="政治面貌"
            data={data}
            floatTitle="政治面貌"
            onSubmit={() => console.log("submit")}
          >
            <SelectList
              selectKey={data.aac024}
              onChange={(v) => handleChange("aac024", v)}
              items={[
                {
                  key: 13,
                  title: "群众",
                },
                {
                  key: 1,
                  title: "中共党员/预备党员",
                },
                {
                  key: 3,
                  title: "共青团员",
                },
                {
                  key: 9,
                  title: "其他",
                },
              ]}
            />
          </InputPicker>
          <InputPicker
            name="ccc001"
            title="采集信息归属地"
            data={data}
            floatTitle="请选择地区"
          >
            1234
          </InputPicker>
          <TextInput name="aac028" title="是否为农村劳动力" data={data}>
            <Radio.Group defaultValue="1" direction="horizontal">
              <Radio name="1">是</Radio>
              <Radio name="2">否</Radio>
            </Radio.Group>
          </TextInput>
        </AtForm>
      </Card>
      <ActionBar
        onNext={() =>
          Taro.navigateTo({
            url: "pages/manPowerCollection/myWorkInfo/pages/baseInfo/index",
          })
        }
      />
    </StepWrap>
  );
}
