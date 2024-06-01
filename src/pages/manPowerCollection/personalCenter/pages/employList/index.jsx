import { Image, Text, View } from "@tarojs/components";
import "./index.scss";
import { AtNavBar, AtSearchBar, AtTabs, AtTabsPane } from "taro-ui";
import Taro from "@tarojs/taro";
import { useState } from "react";
import NameIcon from "@/src/assets/mpc_my_info.svg";
import PhoneIcon from "@/src/assets/mpc_phone.svg";
import PositionIcon from "@/src/assets/mpc_position.svg";
import MarkIcon from "@/src/assets/mpc_mark.svg";

export default function EmployList() {
  const tabList = [{ title: "我创建的" }, { title: "参与记录" }];

  const [current, setCurrent] = useState(0);

  const total = 15;

  const renderItem = (name, sex, phone, position, departure, updateTime) => {
    return (
      <View className="bg-white rounded-[20px]">
        <View className="flex">
          <View className="flex-1">
            <View className="flex items-center">
              <Image className="w-[32px] h-[32px]" src={NameIcon} />
              <Text className="font-medium text-[32px] mx-[28px]">{name}</Text>
              <Text className="text-[28px] text-[#999]">{sex}</Text>
            </View>
            <View className="flex items-center mt-[16px]">
              <Image className="w-[32px] h-[32px]" src={PhoneIcon} />
              <Text className="mx-[28px] text-[28px]">{phone}</Text>
            </View>
          </View>
          <View className="rounded-[100px] w-[224px] h-[64px] bg-[#ffa01c] text-[26px] text-white flex items-center justify-center">
            <Image className="w-[32px] h-[32px]" src={MarkIcon} />
            <Text>标记人员离世</Text>
          </View>
        </View>
        <View className="flex items-center mt-[16px]">
          <Image className="w-[32px] h-[32px]" src={PositionIcon} />
          <Text className="mx-[28px] text-[28px]">{position}</Text>
        </View>
        <View className="mt-[28px] pt-[28px] border-t-2px border-solid border-l-0 border-r-0 border-b-0 border-[#eee] text-[26px] text-[#999] flex justify-end">
          更新时间：{updateTime}
        </View>
      </View>
    );
  };

  return (
    <View className="h-full pt-[96px] box-border bg-[#F7F8FC]">
      <AtNavBar
        color="#000"
        onClickLeftIcon={() => Taro.navigateBack()}
        title={"个人劳动力信息"}
        leftIconType="chevron-left"
        fixed
      />
      <AtSearchBar showActionButton />
      <AtTabs current={current} tabList={tabList} onClick={setCurrent}>
        <AtTabsPane current={current} index={0} className="px-[28px]">
          <View className="text-[28px] my-[28px]">
            共
            <Text className="text-[28px] text-[#FFA01C] mx-[14px]">
              {total}
            </Text>
            条信息
          </View>
          {renderItem(
            "找小满",
            "男",
            "1313131313",
            "哈哈哈哈哈哈哈哈哈或省",
            true,
            "2024-05-14 09:19:19"
          )}
        </AtTabsPane>
        <AtTabsPane current={current} index={1}></AtTabsPane>
      </AtTabs>
    </View>
  );
}
