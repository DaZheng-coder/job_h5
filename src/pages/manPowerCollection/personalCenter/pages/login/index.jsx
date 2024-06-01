import { Image, Input, Text, View } from "@tarojs/components";
import "./index.scss";
import { AtButton, AtCheckbox, AtInput, AtNavBar } from "taro-ui";
import Taro from "@tarojs/taro";
import Cover_img from "@/src/assets/mpc_personal_cover.png";
import { useState } from "react";

export default function Login() {
  const phone = "186****8549";

  const [checked, setChecked] = useState(false);
  const [codeLogin, setCodeLogin] = useState(true);

  const renderPhoneLogin = () => {
    return (
      <>
        <View>
          <View className="text-[30px] mb-[28px]">本机号码</View>
          <View className="text-[50px] font-medium mb-[28px]">{phone}</View>
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
                    <Text className="text-[#FFA01C]">《用户协议》</Text>
                    <Text className="text-[#FFA01C]">《隐私协议》</Text>
                  </View>
                ),
              },
            ]}
          ></AtCheckbox>
        </View>
        <AtButton
          className="bg-[#ffa01c] border-[#ffa01c] mb-[28px]"
          type="primary"
          circle
        >
          一键登录
        </AtButton>
        <AtButton
          className="border-[#ffa01c] bg-transparent text-[#ffa01c]"
          type="primary"
          circle
          onClick={() => setCodeLogin(true)}
        >
          验证码登陆
        </AtButton>
      </>
    );
  };

  const renderCodeLogin = () => {
    return (
      <>
        <AtInput placeholder="请输入手机号" className="!ml-0"></AtInput>
        <AtInput
          clear
          type="text"
          maxLength="4"
          placeholder="请输入手机验证码"
          className="!ml-0"
        >
          <View className="!text-[#FFA01C] text-[28px]">发送验证码</View>
        </AtInput>
        <AtInput
          clear
          type="text"
          maxLength="4"
          placeholder="验证码"
          className="!ml-0"
        >
          <Image src="https://aotu.io/img.png" />
        </AtInput>
        <AtCheckbox
          type="checkbox"
          className="login_checkbox mb-[5px]"
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
                  <Text className="text-[#FFA01C]">《用户协议》</Text>
                  <Text className="text-[#FFA01C]">《隐私协议》</Text>
                </View>
              ),
            },
          ]}
        ></AtCheckbox>
        <AtButton
          className="bg-[#ffa01c] border-[#ffa01c] mb-[28px]"
          type="primary"
          circle
        >
          登陆
        </AtButton>
        <AtButton
          className="border-[#ffa01c] bg-transparent text-[#ffa01c]"
          type="primary"
          circle
        >
          一键登录
        </AtButton>
      </>
    );
  };

  return (
    <View className="login_container px-[56px]">
      <AtNavBar
        color="#000"
        onClickLeftIcon={() => Taro.navigateBack()}
        title={"登陆"}
        leftIconType="chevron-left"
        fixed
      />
      <View className="h-[368px] flex items-center box-border">
        <View className="w-[240px]  text-[#000] text-[40px] font-medium ">
          <Text className="">农村劳动力</Text>
          <Text className="">信息采集系统</Text>
        </View>
        <View className="w-[378px] h-[256px] flex justify-end">
          <Image className="h-[256px]" src={Cover_img} />
        </View>
      </View>
      {codeLogin ? renderCodeLogin() : renderPhoneLogin()}
    </View>
  );
}
