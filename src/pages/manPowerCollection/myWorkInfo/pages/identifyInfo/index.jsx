import { Picker, Text, View } from "@tarojs/components";
import "./index.scss";
import StepWrap from "../../../../../component/StepWrap";
import MCard from "../../../../../component/Card";
import { AtForm, AtInput, AtRadio } from "taro-ui";
import { useEffect, useState } from "react";
import TextInput from "../../../../../component/TextInput";
import InputPicker from "../../../../../component/InputPicker";
import SelectList from "../../../../../component/SelectList";
import Taro from "@tarojs/taro";
import ActionBar from "../../../../../component/ActionBar";
import MRadioInput from "@/src/component/MRadioInput";
import { useStore } from "@/src/store";
import { Cascader } from "@taroify/core";
import "@taroify/core/Cascader/style";
import axios from "axios";
import { getAreas } from "@/src/api/apis";
import MSelectPicker from "@/src/component/MSelectPicker";
import { useMpcData } from "@/src/hooks/useMpcData";

const dept = [
  {
    label: "研发中心",
    value: "1",
    children: [
      {
        label: "产线1",
        value: "1-1",
        children: [
          {
            label: "研发",
            value: "1-1-1",
          },
          {
            label: "测试",
            value: "1-1-2",
          },
          {
            label: "产品",
            value: "1-1-3",
          },
        ],
      },
      {
        label: "产线2",
        value: "1-2",
      },
    ],
  },
  {
    label: "客户中心",
    value: "2",
    children: [
      {
        label: "客服",
        value: "2-1",
      },
      {
        label: "销售",
        value: "2-2",
      },
    ],
  },
];

export default function IdentifyInfo() {
  const { data, handleNext, handleChange } = useMpcData();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [dynamic, setDynamic] = useState([]);
  const [fieldValue, setFieldValue] = useState("");

  console.log("*** data", data);

  const political = [
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
  ];

  const initArea = async () => {
    // const res = await getAreas({ arealevel: 0 });
    // console.log("*** res", res);
  };

  useEffect(() => {
    0;
    initArea();
  }, []);

  return (
    <StepWrap current={1} title="个人劳动力信息">
      <MCard
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
          <MSelectPicker
            title="政治面貌"
            selectKey={political.find((p) => p.key === data["aac024"])?.title}
            onSelect={(v) => handleChange("aac024", v)}
            selectList={political}
          />
          <InputPicker
            name="ccc001"
            title="采集信息归属地"
            data={data}
            floatTitle="请选择地区"
          >
            <Cascader
              options={dynamic}
              loadData={(_values_) => {
                const len = _values_.length;
                return new Promise((resolve) => {
                  resolve(
                    len > 3
                      ? []
                      : [
                          { label: `动态${len}-1`, value: Math.random() },
                          { label: `动态${len}-2`, value: Math.random() },
                        ]
                  );
                });
              }}
              value={value}
              swipeable
              placeholder="请选择"
              onSelect={setValue}
              onChange={(_values_, options) => {
                setOpen(false);
                setFieldValue(options.map((item) => item.children).join("/"));
              }}
            />
          </InputPicker>
          <MRadioInput
            title="是否为农村地区劳动力"
            radios={[
              { key: 1, title: "是" },
              { key: 0, title: "否" },
            ]}
            selectKey={data["aac028"] || 0}
            onSelect={(v) => handleChange("aac028", v)}
          />
          <ActionBar
            onNext={() =>
              handleNext(
                "pages/manPowerCollection/myWorkInfo/pages/baseInfo/index"
              )
            }
          />
        </AtForm>
      </MCard>
    </StepWrap>
  );
}
