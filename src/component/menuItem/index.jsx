import { Image, View } from "@tarojs/components";
import "./index.scss";

export default function MenuItem({
  icon,
  title,
  subTitle,
  onClick,
  className,
}) {
  return (
    <View className={"menu_item " + className || ""} onClick={onClick}>
      <Image src={icon} className="menu_item_icon" />
      <View className="menu_item_info">
        <View className="menu_item_title">{title}</View>
        <View className="menu_item_subTitle">{subTitle}</View>
      </View>
    </View>
  );
}
