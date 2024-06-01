import { Image, Text, View } from "@tarojs/components";
import MCard from "../Card";
import Taro from "@tarojs/taro";
import { useState } from "react";
import IdentifyDefaultPicture from "@/src/assets/mpc_identify_picture.png";
import ScreenSvg from "@/src/assets/icon_screen.svg";

export default function IdentifyCard() {
  const [picture, setPicture] = useState();

  const openScreen = () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        // updateManPower({ identifyPicture: tempFilePaths[0] });
        setPicture(tempFilePaths[0]);
      },
    });
  };
  return (
    <MCard
      title="实名信息"
      extra={
        <View className="text-[#666] text-[30px]">
          <Text className="font-medium text-[#000]">1</Text>
          <Text>/5</Text>
        </View>
      }
    >
      <Text className="text-[28px] mt-[20px]">身份证人像面照片</Text>
      <View
        className="mt-[26px] rounded-[20px] boreder-2px border-[#999] border-dashed py-[28px] flex flex-col items-center"
        onClick={openScreen}
      >
        <Image
          className="w-[478px] h-[286px]  boreder-2px border-[#999] border-dashed "
          src={picture || IdentifyDefaultPicture}
        />
        <View className="flex justify-center items-center mt-[28px]">
          <View className="w-[48px] h-[48px] flex justify-center items-center  boreder-2px border-[#999] border-dashed">
            <Image src={ScreenSvg} />
          </View>
          <Text className="ml-[3px] text-[24px] text-[#999]">
            点击进行上传或拍照
          </Text>
        </View>
      </View>
      <View className="text-[#999] text-[24px] mt-[28px]">
        注：上传真实信息能极大提高识别成功率哦～
      </View>
    </MCard>
  );
}
