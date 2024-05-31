import { Text, View } from "@tarojs/components";
import TextInput from "../TextInput";
import { AtActionSheet, AtActionSheetItem, AtIcon } from "taro-ui";
import { useState } from "react";
import { AtFloatLayout } from "taro-ui";
import FloatLayout from "../FloatLayout";

export default function InputPicker({
  name,
  title,
  data,
  children,
  floatTitle,
  onSubmit,
}) {
  const [visible, setVisible] = useState(false);
  return (
    <TextInput name={name} title={title} data={data}>
      <View
        className="!flex !items-center !pr-0"
        onClick={() => setVisible(true)}
      >
        <Text className="!text-[#999] !pr-0">请选择</Text>
        <AtIcon value="chevron-right !px-0" color="#999" size="20"></AtIcon>
      </View>
      <FloatLayout
        visible={visible}
        title={floatTitle}
        onClose={() => {
          onSubmit?.();
          setVisible(false);
        }}
      >
        {children}
      </FloatLayout>
    </TextInput>
  );
}
