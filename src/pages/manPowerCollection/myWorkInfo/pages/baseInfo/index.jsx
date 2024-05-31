import { Text, View } from "@tarojs/components";
import "./index.scss";
import StepWrap from "../../../../../component/StepWrap";
import Card from "../../../../../component/Card";
import TextInput from "../../../../../component/TextInput";
import { useState } from "react";
import { AtIcon } from "taro-ui";
import ActionBar from "../../../../../component/ActionBar";
import Taro from "@tarojs/taro";

export default function BaseInfo() {
  const [data, setData] = useState({});
  const select = (onClick) => {
    return (
      <View className="!flex !items-center !pr-0" onClick={onClick}>
        <Text className="!text-[#999] !pr-0">请选择</Text>
        <AtIcon value="chevron-right !px-0" color="#999" size="20"></AtIcon>
      </View>
    );
  };
  return (
    <StepWrap current={2} title="个人劳动力信息">
      <Card
        title="基本信息"
        extra={
          <View className="text-[#666] text-[30px]">
            <Text className="font-medium text-[#000]">2</Text>
            <Text>/5</Text>
          </View>
        }
      >
        <TextInput
          className="mt-[20px]"
          name="aac011"
          title="最高学历"
          data={data}
        >
          {select()}
        </TextInput>
        <TextInput name="" title="最高毕业院校" data={data}></TextInput>
        <TextInput name="agz065" title="最高学历专业" data={data}>
          {select()}
        </TextInput>
        <TextInput name="ccc002" title="技能特长" data={data}>
          {select()}
        </TextInput>
        <TextInput name="aac015" title="专业技能等级" data={data}>
          {select()}
        </TextInput>
        <TextInput name="aac010" title="户口所在地" data={data}>
          {select()}
        </TextInput>
        <TextInput name="aae006" title="现居住地" data={data}>
          {select()}
        </TextInput>
      </Card>
      <ActionBar
        onNext={() =>
          Taro.navigateTo({
            url: "pages/manPowerCollection/myWorkInfo/pages/employInfo/index",
          })
        }
      ></ActionBar>
    </StepWrap>
  );
}
