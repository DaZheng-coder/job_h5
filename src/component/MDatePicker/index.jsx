import { AtFloatLayout, AtIcon, AtInput } from "taro-ui";
import { Text, View } from "@tarojs/components";
import FloatLayout from "../FloatLayout";
import { useState } from "react";
import { DatetimePicker } from "@taroify/core";
import "@taroify/core/datetime-picker/style";

export default function MDatePicker({ title, subTitle, value }) {
  const [visible, setVisible] = useState(false);
  const handleClose = () => setVisible(false);
  return (
    <AtInput
      className="text_input none_text"
      title={title}
      type="text"
      required
    >
      <View
        className="!flex !items-center !pr-0"
        onClick={() => setVisible(true)}
      >
        <Text className="!text-[#999] !pr-0">{value || "请选择"}</Text>
        <AtIcon value="chevron-right !p-0" color="#999" size="20"></AtIcon>
      </View>
      <AtFloatLayout
        className="float_layout_wrap"
        isOpened={visible}
        onClose={handleClose}
      >
        <DatePicker onClose={handleClose} />
      </AtFloatLayout>
    </AtInput>
  );
}

function DatePicker({ onClose }) {
  const [minDate] = useState(new Date(2021, 9, 14));
  const [maxDate] = useState(new Date(2023, 11, 12));
  const [defaultValue] = useState(new Date(2021, 9, 14));
  const [value, setValue] = useState(new Date(2022, 10, 14));
  return (
    <DatetimePicker
      type="date"
      min={minDate}
      max={maxDate}
      defaultValue={defaultValue}
      value={value}
      onChange={setValue}
    >
      <DatetimePicker.Toolbar>
        <DatetimePicker.Button onClick={onClose}>取消</DatetimePicker.Button>
        <DatetimePicker.Title>选择年月日</DatetimePicker.Title>
        <DatetimePicker.Button onClick={onClose}>确认</DatetimePicker.Button>
      </DatetimePicker.Toolbar>
    </DatetimePicker>
  );
}
