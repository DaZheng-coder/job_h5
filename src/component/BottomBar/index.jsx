import { Image, View } from "@tarojs/components";
import "./index.scss";

export default function BottomBar({ items, activeKey }) {
  console.log("*** activeKey", activeKey);
  return (
    <View className="bottom_bar">
      {items.map((item) => (
        <View
          className={`item ${activeKey === item.key ? "active" : ""}`}
          key={item.key}
          onClick={() => item.onClick(item.key)}
        >
          {activeKey === item.key ? (
            <Image src={item.activeIcon} />
          ) : (
            <Image src={item.icon} />
          )}
          <View className="item_title">{item.title}</View>
        </View>
      ))}
    </View>
  );
}
