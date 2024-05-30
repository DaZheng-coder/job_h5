import { View } from "@tarojs/components";
import "./index.scss";

export default function Card({ title, extra, children }) {
  return (
    <View className="card_wrap">
      <View className="header">
        <View className="title">
          <View className="title_line"></View>
          <View className="text"> {title}</View>
        </View>
        <View className="extra">{extra}</View>
      </View>
      {children}
    </View>
  );
}
