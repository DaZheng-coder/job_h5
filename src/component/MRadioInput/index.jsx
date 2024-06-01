import { AtInput } from "taro-ui";
import "./index.scss";
import { Text, View } from "@tarojs/components";
import { AtIcon } from "taro-ui";

export default function MRadioInput({ title, radios, selectKey, onSelect }) {
  return (
    <AtInput
      className="text_input none_text radio_input"
      title={title}
      type="text"
      required
    >
      <View className="!flex !items-center !p-0">
        <View className="flex">
          {radios.map((radio) => (
            <View
              className="radio-wrap flex items-center mr-[40px]"
              key={radio.key}
            >
              {selectKey === radio.key ? (
                <View className="radio_active">
                  <AtIcon value="check" size="15" color="white"></AtIcon>
                </View>
              ) : (
                <View
                  className="radio-circle"
                  onClick={() => onSelect(radio.key)}
                ></View>
              )}
              <Text className="!text-[#666] text-[28px] ml-[16px] !p-0">
                {radio.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </AtInput>
  );
}
