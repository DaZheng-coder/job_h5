import { View } from "@tarojs/components";
import "./index.scss";

export default function MCard({ title, extra, children, className }) {
  return (
    <View className={"card_wrap " + className}>
      <View className="header">
        <View className="title">
          <View className="title_line"></View>
          <View className="text"> {title}</View>
        </View>
        <View className="extra">{extra}</View>
      </View>
      <View>{children}</View>
    </View>
  );
}
