import { View } from "@tarojs/components";
import "./index.scss";

export default function Steps({ steps, current }) {
  return (
    <View className="steps_wrap">
      {steps.map((step, index) => {
        return (
          <View key={step.key} className="step">
            {index + 1 === current ? (
              <View className="step_active">
                <View className="circle"></View>
              </View>
            ) : (
              <View className="step_unactive">{index + 1}</View>
            )}
            <View className={`title ${index + 1 === current ? "active" : ""}`}>
              {step.title}
            </View>
            {index !== steps.length - 1 && (
              <View
                className={`row ${index + 1 <= current ? "active-line" : ""}`}
              ></View>
            )}
          </View>
        );
      })}
    </View>
  );
}
