import { Button, View } from "@tarojs/components";
import { AtButton } from "taro-ui";

export default function ActionBar({ onNext, nextText = "下一步" }) {
  return (
    <View className="fixed bottom-0 h-[144px] w-[100%] bg-white shadow-custom py-[28px] flex justify-center">
      <AtButton
        type="primary"
        className="w-[638px] bg-[#ffa01c] border-none"
        onClick={onNext}
        circle
      >
        {nextText}
      </AtButton>
    </View>
  );
}
