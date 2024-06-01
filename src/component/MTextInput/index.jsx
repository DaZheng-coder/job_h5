import { AtInput } from "taro-ui";
import "./index.scss";

export default function MTextInput({ name, title, onChange, value }) {
  return (
    <AtInput
      className={`text_input`}
      name={name}
      title={title}
      type="text"
      placeholder="请输入"
      value={value}
      required
      onChange={(v) => onChange(name, v)}
    />
  );
}
