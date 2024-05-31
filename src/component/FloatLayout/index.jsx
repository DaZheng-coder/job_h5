import { Text, View } from "@tarojs/components";
import { AtFloatLayout } from "taro-ui";
import "./index.scss";

export default function FloatLayout({ visible, title, onClose, children }) {
  return (
    <AtFloatLayout
      className="float_layout_wrap"
      isOpened={visible}
      onClose={onClose}
    >
      <View className="py-[32px] flex relative">
        <View className="flex-1 text-[30px] text-[#000]">{title}</View>
        <Text
          className="absolute right-0 !pr-[28px] !text-[#ffa01c] !text-[28px]"
          onClick={onClose}
        >
          确定
        </Text>
      </View>
      {children}
    </AtFloatLayout>
  );
}
