import { AtIcon, AtInput } from "taro-ui";
import { Text, View } from "@tarojs/components";
import FloatLayout from "../FloatLayout";
import { useState } from "react";

export default function MSelectPicker({
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
        <View className="text-[28px] text-[#000]">
          {selectList.map((item) => (
            <View
              key={item.key}
              className={
                "py-[32px] " +
                (sKey === item.key
                  ? "text-[#FFA01C] bg-[rgba(255,160,28,0.1);]"
                  : "")
              }
              onClick={() => {
                setSKey(item.key);
              }}
            >
              {item.title}
            </View>
          ))}
        </View>
      </FloatLayout>
    </AtInput>
  );
}
