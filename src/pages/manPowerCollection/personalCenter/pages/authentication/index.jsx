import { Text, View } from "@tarojs/components";
import "./index.scss";
import { AtCheckbox, AtNavBar } from "taro-ui";
import Taro from "@tarojs/taro";
import MCard from "@/src/component/Card";
import MSelectPicker from "@/src/component/MSelectPicker";
import MTextInput from "@/src/component/MTextInput";
import { useState } from "react";
import ActionBar from "@/src/component/ActionBar";
import IdentifyCard from "@/src/component/IdentifyCard";

export default function Login() {
  const idType = [
    {
      key: 3,
      title: "中国人员武装警察警官证",
    },
    {
      key: 2,
      title: "中国人民解放军军官证",
    },
    {
      key: 99,
      title: "其他身份证证件",
    },
    {
      key: 10,
      title: "军烈属证明",
    },
    {
      key: 14,
      title: "台港澳人员就业证",
    },
    {
      key: 6,
      title: "台湾居民来往大陆通行证",
    },
    {
      key: 15,
      title: "回国（来华）定居专家证",
    },
    {
      key: 12,
      title: "外国专家证",
    },
    {
      key: 11,
      title: "外国人就业证",
    },
    {
      key: 13,
      title: "外国人常驻记者证",
    },
    {
      key: 8,
      title: "外国人护照",
    },
    {
      key: 7,
      title: "外国人永久居留证",
    },
    {
      key: 1,
      title: "居民身份证(户口簿)",
    },
    {
      key: 9,
      title: "残疾人证",
    },
    {
      key: 5,
      title: "澳门特区护照/港澳居民来往内地通行证",
    },
    {
      key: 90,
      title: "社会保障卡",
    },
    {
      key: 4,
      title: "香港特区护照/港澳居民来往内地通行证",
    },
  ];

  const [checked, setChecked] = useState(false);

  const [screenAuth, setScreenAuth] = useState(false);

  const gotoScreenAuth = () => {
    setScreenAuth(true);
  };

  const renderInputAuth = () => {
    return (
      <>
        <MSelectPicker
          title="证件类型"
          selectList={idType}
          // selectKey={idType.find((p) => p.key === data["aac028"])?.title}
          onSelect={(v) => {}}
        ></MSelectPicker>
        <MTextInput
          title="姓名"
          name="aac003"
          // value={data.ccc018}
          // onChange={handleChange}
        />
        <MTextInput
          title="身份证号码"
          name="aac147"
          // value={data.ccc018}
          // onChange={handleChange}
        />
        <AtCheckbox
          type="checkbox"
          className="login_checkbox mb-[46px]"
          selectedList={[checked]}
          onChange={(v) => {
            setChecked(v[1]);
          }}
          options={[
            {
              value: true,
              label: (
                <View>
                  我已阅读并同意
                  <Text className="text-[#FFA01C]">《实名认证协议》</Text>
                </View>
              ),
            },
          ]}
        ></AtCheckbox>
      </>
    );
  };

  return (
    <View className="h-full pt-[96px] box-border bg-[#F7F8FC]">
      <AtNavBar
        color="#000"
        onClickLeftIcon={() => Taro.navigateBack()}
        title={"实名认证"}
        leftIconType="chevron-left"
        fixed
      />
      {screenAuth ? (
        <IdentifyCard />
      ) : (
        <MCard title="实名认证">{renderInputAuth()} </MCard>
      )}
      {screenAuth ? (
        <ActionBar onNext={() => {}} nextText="确定"></ActionBar>
      ) : (
        <ActionBar className="!h-[268px]" onNext={() => {}} nextText="提交">
          <View
            onClick={gotoScreenAuth}
            className="text-[30px] text-[#ffa01c] mt-[28px] text-center"
          >
            拍照识别
          </View>
        </ActionBar>
      )}
    </View>
  );
}
