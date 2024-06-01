import { Text, View } from "@tarojs/components";
import { useEffect, useState } from "react";
import "./index.scss";
import { AtDrawer, AtIcon, AtInput, AtNavBar } from "taro-ui";

export default function MDrawerPicker({
  title,
  subTitle,
  value,
  initKey,
  lList,
  rList,
}) {
  const [visible, setVisible] = useState(false);
  const [key1, setKey1] = useState(initKey);

  return (
    <>
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
          <Text className="!text-[#999] !pr-0">{value || "请选择"}</Text>
          <AtIcon value="chevron-right !p-0" color="#999" size="20"></AtIcon>
        </View>
      </AtInput>
      <AtDrawer
        show={visible}
        onClose={() => setVisible(false)}
        width="100vw"
        right
        className="h-full !text-[#000] !text-[26px]"
      >
        <AtNavBar
          color="#000"
          onClickLeftIcon={() => setVisible(false)}
          title={subTitle}
          leftIconType="chevron-left"
        />
        <View className="flex">
          <View className="left-side  h-[90vh]">
            {lList.map((item) => (
              <View
                className={
                  (item.key === key1 ? "draw_picker_active " : " ") +
                  "mt-[28px] pl-[28px] w-[200px]"
                }
                key={item.key}
                onClick={() => {
                  console.log("1234");
                  setKey1(item.key);
                }}
              >
                {item.title}
              </View>
            ))}
          </View>
          <View>
            {rList.map((item) => (
              <View key={item.key} className="">
                <Text className="text-[30px] font-medium !text-[#000] mb-[20px]">
                  {item.title}
                </Text>
                <View className="flex flex-wrap">
                  {rList.map((item) => (
                    <View className="drawer_list_block">{item.title}</View>
                  ))}
                  <View className="drawer_list_block !border-none !text-[#000] !bg-[#F5F5F5]">
                    {item.title}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </AtDrawer>
    </>
  );
}
