import { useState } from "react";
import { useStore } from "../store";
import Taro from "@tarojs/taro";

export const useMpcData = () => {
  const manPower = useStore((s) => s.manPower);
  const updateManPower = useStore((s) => s.updateManPower);
  const [data, setData] = useState(manPower);

  const handleChange = (k, v) => {
    setData((prev) => ({ ...prev, [k]: v }));
  };

  const handleNext = (url) => {
    updateManPower(data);
    Taro.navigateTo({
      url,
    });
  };

  const handlePrev = () => {
    Taro.navigateBack();
  };

  return { data, handleNext, handleChange, handlePrev };
};
