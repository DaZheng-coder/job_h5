import { Image, Text, View } from "@tarojs/components";
import "./index.scss";
import MenuItem from "@/src/component/menuItem";
import Cover_img from "@/src/assets/mpc_personal_cover.png";
import FolderIcon from "@/src/assets/mpc_person_folder.png";
import UserIcon from "@/src/assets/mpc_personal_user.png";
import Taro from "@tarojs/taro";

export default function PersonalCenter() {
  const logged = true;
  const name = "找小号";

  const handleClick = () => {
    if (logged) return;
    Taro.navigateTo({
      url: "pages/manPowerCollection/personalCenter/pages/login/index",
    });
  };

  const gotoAuth = () => {
    Taro.navigateTo({
      url: "pages/manPowerCollection/personalCenter/pages/authentication/index",
    });
  };

  return (
    <View className="personal_cover" onClick={handleClick}>
      <View className="h-[452px] flex p-[28px] items-center">
        <View className="w-[192px] ml-[28px]">
          <View className="text-[#000] text-[32px] font-medium mb-[20px]">
            您好
          </View>
          {logged ? (
            <View className="flex">
              <Text className="text-[#000] text-[32px] font-medium mr-[20px] whitespace-nowrap">
                {name}
              </Text>
              <View
                onClick={gotoAuth}
                className="text-[24px] text-[#fe6226] p-[6px] border-solid rounded-[6px] border-[1px] border-[#fe6226] bg-[#fff1ec] whitespace-nowrap"
              >
                去实名{">"}
              </View>
            </View>
          ) : (
            <View className="text-[#ffa01c] text-[32px] font-medium underline">
              请先登陆账号
            </View>
          )}
        </View>
        <Image className="w-[442px] h-[368px]" src={Cover_img} />
      </View>
      <MenuItem
        title="个人劳动力信息"
        subTitle="当前信息-条"
        icon={FolderIcon}
        onClick={() =>
          logged &&
          Taro.navigateTo({ url: "pages/manPowerCollection/personalCenter/pages/employList/index" })
        }
      />
      <MenuItem
        title="超龄及离世人员信息"
        subTitle="当前信息-条"
        icon={UserIcon}
        onClick={() =>
          logged &&
          Taro.navigateTo({ url: "pages/manPowerCollection/personalCenter/pages/employDetail/index" })
        }
      />
    </View>
  );
}
