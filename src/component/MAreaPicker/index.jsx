import { Cascader } from "@taroify/core";
import { useState } from "react";
import InputPicker from "../InputPicker";

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

export default function MAreaPicker({ name, data, onSelect, title, subTitle }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [fieldValue, setFieldValue] = useState("");
  return (
    <InputPicker
      name={name}
      title={title}
      data={data}
      floatTitle={subTitle || title}
    >
      <Cascader
        options={dept}
        value={value}
        title={subTitle}
        placeholder="请选择"
        onSelect={setValue}
        onChange={(_values_, options) => {
          onSelect(_values_);
          setOpen(false);
          setFieldValue(options.map((item) => item.children).join("/"));
        }}
      />
    </InputPicker>
  );
}
