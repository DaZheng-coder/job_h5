import { Text, View } from "@tarojs/components";
import "./index.scss";
import StepWrap from "../../../../../component/StepWrap";
import MCard from "../../../../../component/Card";
import TextInput from "../../../../../component/TextInput";
import { useState } from "react";
import { AtIcon } from "taro-ui";
import ActionBar from "../../../../../component/ActionBar";
import Taro from "@tarojs/taro";
import MSelectPicker from "@/src/component/MSelectPicker";
import MDrawerPicker from "@/src/component/MDrawerPicker";
import MTextInput from "@/src/component/MTextInput";
import MListPicker from "@/src/component/MListPicker";
import { useMpcData } from "@/src/hooks/useMpcData";
import MAreaPicker from "@/src/component/MAreaPicker";

export default function BaseInfo() {
  const educational = [
    {
      key: "41",
      title: "中等专科",
    },
    {
      key: "71",
      title: "初级中学",
    },
    {
      key: "11",
      title: "博士研究生",
    },
    {
      key: "31",
      title: "大学专科",
    },
    {
      key: "32",
      title: "大学本科",
    },
    {
      key: "81",
      title: "小学",
    },
    {
      key: "47",
      title: "技工学校",
    },
    {
      key: "61",
      title: "普通中学",
    },
    {
      key: "41",
      title: "中等专科",
    },
    {
      key: "14",
      title: "硕士研究生",
    },
    {
      key: "44",
      title: "职业高中",
    },
    {
      key: "90",
      title: "其他",
    },
  ];

  const skillLevel = [
    {
      key: 2,
      title: "中级（四级）",
    },
    {
      key: 1,
      title: "初级（五级）",
    },
    {
      key: 4,
      title: "技师（二级）",
    },
    {
      key: 5,
      title: "高级技师（一级）",
    },
    {
      key: 3,
      title: "高级（三级）",
    },
  ];

  const { data, handleNext, handleChange } = useMpcData();

  return (
    <StepWrap current={2} title="个人劳动力信息">
      <MCard
        title="基本信息"
        extra={
          <View className="text-[#666] text-[30px]">
            <Text className="font-medium text-[#000]">2</Text>
            <Text>/5</Text>
          </View>
        }
      >
        <MSelectPicker
          title="最高学历"
          subTitle="选择学历专业"
          selectKey={educational.find((p) => p.key === data["aac011"])?.title}
          selectList={educational}
          onSelect={(v) => handleChange("aac024", v)}
        />
        <MTextInput
          name="academy"
          title="最高毕业院校"
          onChange={handleChange}
          value={data["academy"]}
        />
        <MDrawerPicker
          title="最高学历专业"
          subTitle="选择学历专业"
          lList={[]}
          rList={[]}
        />
        <MListPicker title="技能特长" selectList={[]} onSelect={() => {}} />
        <MSelectPicker
          title="专业技能等级"
          selectList={skillLevel}
          selectKey={educational.find((p) => p.key === data["aac015"])?.title}
          onSelect={(v) => handleChange("aac015", v)}
        />
        <MAreaPicker
          title="户口所在地"
          name="aac010"
          data={data}
          onSelect={() => {}}
        />
        <MAreaPicker
          title="现居住地"
          name="aae006"
          data={data}
          onSelect={() => {}}
        />
      </MCard>
      <ActionBar
        onNext={() =>
          handleNext(
            "pages/manPowerCollection/myWorkInfo/pages/employInfo/index"
          )
        }
      ></ActionBar>
    </StepWrap>
  );
}
