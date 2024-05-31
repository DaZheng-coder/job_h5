import { Text, View } from "@tarojs/components";
import "./index.scss";
import StepWrap from "../../../../../component/StepWrap";
import Card from "../../../../../component/Card";
import TextInput from "../../../../../component/TextInput";
import { useState } from "react";
import { AtIcon } from "taro-ui";
import ActionBar from "../../../../../component/ActionBar";
import Taro from "@tarojs/taro";

export default function EmployInfo() {
  return (
    <StepWrap current={3}>
      <Card
        title="就业信息"
        extra={
          <View className="text-[#666] text-[30px]">
            <Text className="font-medium text-[#000]">3</Text>
            <Text>/5</Text>
          </View>
        }
      ></Card>
    </StepWrap>
  );
}
