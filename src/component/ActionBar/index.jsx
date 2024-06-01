import { Button, View } from "@tarojs/components";
import { AtButton } from "taro-ui";

export default function ActionBar({
  onNext,
  nextText = "下一步",
  onPrev,
  className,
  children,
}) {
  return (
    <View
      className={
        "fixed bottom-0 h-[192px] w-[100vw] box-border bg-white shadow-custom p-[28px] !z-[999] " +
        className
      }
    >
      <View className="flex justify-center">
        {onPrev && (
          <AtButton
            formType="submit"
            type="primary"
            className="w-[220px] border-[2px] border-solid border-[#ffa01c] bg-transparent  text-[#ffa01c] mr-[28px]"
            onClick={onPrev}
            circle
          >
            上一步
          </AtButton>
        )}
        <AtButton
          formType="submit"
          type="primary"
          className="w-[638px] bg-[#ffa01c] border-none"
          onClick={onNext}
          circle
        >
          {nextText}
        </AtButton>
      </View>
      {children}
    </View>
  );
}
