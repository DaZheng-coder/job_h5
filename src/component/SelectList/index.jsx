import { View } from "@tarojs/components";

export default function SelectList({ items, selectKey, onChange }) {
  return (
    <View className="text-[28px] text-[#000]">
      {items.map((item) => (
        <View
          key={item.key}
          className={
            "py-[32px] " +
            (selectKey === item.key
              ? "text-[#FFA01C] bg-[rgba(255,160,28,0.1);]"
              : "")
          }
          onClick={() => onChange(item.key)}
        >
          {item.title}
        </View>
      ))}
    </View>
  );
}
