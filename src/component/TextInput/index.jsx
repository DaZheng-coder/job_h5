import { AtInput } from "taro-ui";
import "./index.scss";

export default function TextInput({ name, title, onChange, data, children }) {
  return (
    <AtInput
      className={`text_input ${children ? "none_text" : ""}`}
      name={name}
      title={title}
      type="text"
      placeholder="请输入"
      value={data[name]}
      required
      onChange={(v) => onChange(name, v)}
    >
      {children}
    </AtInput>
  );
}
