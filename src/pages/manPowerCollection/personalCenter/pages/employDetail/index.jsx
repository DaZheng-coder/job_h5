import { Image, Text, View } from "@tarojs/components";
import "./index.scss";
import NameIcon from "@/src/assets/mpc_my_info.svg";
import PhoneIcon from "@/src/assets/mpc_phone.svg";
import PositionIcon from "@/src/assets/mpc_position.svg";
import MarkIcon from "@/src/assets/mpc_mark.svg";
import IdCardIcon from "@/src/assets/mpc_id_card.svg";
import { AtNavBar } from "taro-ui";
import MCard from "@/src/component/Card";
import ActionBar from "@/src/component/ActionBar";

export default function EmployDetail() {
  const renderUserInfo = (name, sex, phone, idCard, departure, updateTime) => {
    return (
      <View className="bg-white rounded-[20px] p-[28px] mt-[28px]  mx-[28px]">
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
          <Image className="w-[32px] h-[32px]" src={IdCardIcon} />
          <Text className="mx-[28px] text-[28px]">{idCard}</Text>
        </View>
      </View>
    );
  };

  const renderInfoItem = (title, value, index) => {
    return (
      <View key={index} className="flex text-[28px] mt-[28px]">
        <View className="w-[168px] text-[#999] mr-[28px]">{title}</View>
        <View>{value}</View>
      </View>
    );
  };

  const baseInfo = [
    {
      title: "政治面貌",
      value: "群众",
    },
    {
      title: "最高学历",
      value: "大学专科",
    },
    {
      title: "最高毕业院校",
      value: "背景理工学院",
    },
    {
      title: "最高学历专业",
      value: "电子信息技术专业",
    },
    {
      title: "技能专长",
      value: "计算机、通信",
    },
    {
      title: "专业技能等级",
      value: "无技能等级",
    },
    {
      title: "户口所在地",
      value: "湖北省武汉市江汉区民族街街道万年社区居委会",
    },
    {
      title: "现居住地",
      value: "湖北省武汉市江汉区民族街街道万年社区居委会",
    },
    {
      title: "采集信息归属地区",
      value: "湖北省武汉市江汉区民族街街道万年社区居委会",
    },
    {
      title: "是否为农村地区劳动力",
      value: "否",
    },
  ];

  const employInfo = [
    {
      title: "就业状态",
      value: "已就业",
    },
    {
      title: "就业形式",
      value: "单位就业",
    },
    {
      title: "工作单位名称",
      value: "哈哈哈哈哈公司",
    },
    {
      title: "岗位名称",
      value: "哈哈哈哈工程师",
    },
    {
      title: "工作地区",
      value: "湖北省xxxxx",
    },
    {
      title: "月均收入",
      value: "50000",
    },
    {
      title: "是否退伍军人",
      value: "否",
    },
    {
      title: "是否返乡人员",
      value: "否",
    },
  ];

  const trainInfo = [
    {
      title: "是否参加过技能培训",
      value: "否",
    },
    {
      title: "是否有培训意愿",
      value: "否",
    },
  ];

  const assInfo = [
    {
      title: "是否援助群体",
      value: "否",
    },
  ];

  return (
    <View className="h-full overflow-scroll pt-[96px] box-border bg-[#F7F8FC] pb-[192px]">
      <AtNavBar
        color="#000"
        onClickLeftIcon={() => Taro.navigateBack()}
        title={"个人劳动力信息"}
        leftIconType="chevron-left"
        fixed
      />
      {renderUserInfo("找小蔓", "男", "1313131234", "4564645645664656")}
      <MCard title="基本信息">
        {baseInfo.map((item, index) =>
          renderInfoItem(item.title, item.value, index)
        )}
      </MCard>
      <MCard title="就业信息" className="!mt-[28px]">
        {employInfo.map((item, index) =>
          renderInfoItem(item.title, item.value, index)
        )}
      </MCard>
      <MCard title="培训信息" className="!mt-[28px]">
        {trainInfo.map((item, index) =>
          renderInfoItem(item.title, item.value, index)
        )}
      </MCard>
      <MCard title="援助群体信息" className="!mt-[28px]">
        {assInfo.map((item, index) =>
          renderInfoItem(item.title, item.value, index)
        )}
      </MCard>
      <ActionBar nextText="编辑" />
    </View>
  );
}
