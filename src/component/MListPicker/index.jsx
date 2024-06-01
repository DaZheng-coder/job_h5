import { AtIcon, AtInput } from "taro-ui";
import InputPicker from "../InputPicker";
import SelectList from "../SelectList";
import TextInput from "../TextInput";
import { Text, View } from "@tarojs/components";
import FloatLayout from "../FloatLayout";
import { useState } from "react";

export default function MListPicker({
  title,
  subTitle,
  selectList,
  selectKey,
  onSelect,
}) {
  const [visible, setVisible] = useState(false);
  const [sKey, setSKey] = useState(selectKey);
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
        <Text className="!text-[#999] !pr-0">
          {selectList.find((s) => sKey === s.key)?.title || "请选择"}
        </Text>
        <AtIcon value="chevron-right" color="#999" size="20"></AtIcon>
      </View>
      <FloatLayout
        visible={visible}
        title={subTitle || title}
        onClose={() => {
          onSelect(sKey);
          setVisible(false);
        }}
      >
        <View className="text-[28px] text-[#000] flex flex-wrap">
          {selectList.map((item) => (
            <View className="drawer_list_block">{item.title}</View>
          ))}
        </View>
      </FloatLayout>
    </AtInput>
  );
}
