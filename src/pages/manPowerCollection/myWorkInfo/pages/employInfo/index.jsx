import { Text, View } from "@tarojs/components";
import "./index.scss";
import StepWrap from "../../../../../component/StepWrap";
import MCard from "../../../../../component/Card";
import ActionBar from "../../../../../component/ActionBar";
import MSelectPicker from "@/src/component/MSelectPicker";
import { useMpcData } from "@/src/hooks/useMpcData";
import MTextInput from "@/src/component/MTextInput";
import MAreaPicker from "@/src/component/MAreaPicker";
import MRadioInput from "@/src/component/MRadioInput";
import MDatePicker from "@/src/component/MDatePicker";
import MDrawerPicker from "@/src/component/MDrawerPicker";

export default function EmployInfo() {
  const employStatus = [
    {
      key: 1,
      title: "未就业",
    },
    {
      key: 2,
      title: "已就业",
    },
    {
      key: 3,
      title: "务农-务农人员",
    },
    {
      key: 4,
      title: "务农-有外出就业意愿",
    },
    {
      key: 5,
      title: "务农-有本地就业意愿",
    },
    {
      key: 6,
      title: "入学",
    },
    {
      key: 7,
      title: "入伍",
    },
    {
      key: 8,
      title: "退出劳动力范围",
    },
  ];
  const employmentForms = [
    {
      key: 21,
      title: "个体经营",
    },
    {
      key: 30,
      title: "公益性岗位安置",
    },
    {
      key: 990,
      title: "其他就业形式",
    },
    {
      key: 10,
      title: "单位就业",
    },
    {
      key: 22,
      title: "灵活就业",
    },
  ];
  const averageIncome = [
    {
      key: 1,
      title: "2000元（含）以下",
    },
    {
      key: 2,
      title: "2000-5000（含）",
    },
    {
      key: 3,
      title: "5000-10000（含）",
    },
    {
      key: 4,
      title: "10000以上",
    },
  ];
  const expectEmploy = [
    {
      key: 1,
      title: "单位就业",
    },
    {
      key: 2,
      title: "灵活就业",
    },
    {
      key: 3,
      title: "自主创业",
    },
    {
      key: 4,
      title: "政策安置就业",
    },
  ];

  const { data, handleNext, handleChange, handlePrev } = useMpcData();

  const renderEmployed = () => {
    return (
      <>
        <MSelectPicker
          title="就业形式"
          selectKey={
            employmentForms.find((p) => p.key === data["aac318"])?.title
          }
          selectList={employmentForms}
          onSelect={(v) => handleChange("aac318", v)}
        />
        <MTextInput
          title="工作单位名称"
          name="ccc018"
          value={data.ccc018}
          onChange={handleChange}
        />
        <MTextInput
          title="岗位名称"
          name="ccc019"
          value={data.ccc019}
          onChange={handleChange}
        />
        <MAreaPicker
          title="工作地区"
          name="ccc020"
          data={data}
          onSelect={() => {}}
        />
        <MSelectPicker
          title="月均收入"
          selectKey={averageIncome.find((p) => p.key === data["ccc021"])?.title}
          selectList={averageIncome}
          onSelect={(v) => handleChange("ccc021", v)}
        />
        <MRadioInput
          title="是否退伍军人"
          radios={[
            { key: 1, title: "是" },
            { key: 0, title: "否" },
          ]}
          selectKey={data["ccc010"] || 0}
          onSelect={(v) => handleChange("ccc010", v)}
        />
        <MRadioInput
          title="是否返乡人员"
          radios={[
            { key: 1, title: "是" },
            { key: 0, title: "否" },
          ]}
          selectKey={data["ccc011"] || 0}
          onSelect={(v) => handleChange("ccc011", v)}
        />
        {!!data.ccc011 && (
          <>
            <MAreaPicker
              title="返乡前就业创业所在地"
              name="ccc012"
              data={data}
              onSelect={() => {}}
            />
            <MDatePicker title="返乡时间" />
          </>
        )}
        <MRadioInput
          title="是否继续外出务工"
          radios={[
            { key: 1, title: "是" },
            { key: 0, title: "否" },
          ]}
          selectKey={data["ccc014"] || 0}
          onSelect={(v) => handleChange("ccc014", v)}
        />
        {!!data.ccc014 && (
          <>
            <MRadioInput
              title="是否有留荆就业意愿"
              radios={[
                { key: 1, title: "是" },
                { key: 0, title: "否" },
              ]}
              selectKey={data["ccc015"] || 0}
              onSelect={(v) => handleChange("ccc015", v)}
            />
            <MRadioInput
              title="是否有留荆创业意愿"
              radios={[
                { key: 1, title: "是" },
                { key: 0, title: "否" },
              ]}
              selectKey={data["ccc016"] || 0}
              onSelect={(v) => handleChange("ccc016", v)}
            />
          </>
        )}
      </>
    );
  };

  const renderUnemployed = () => {
    return (
      <>
        <MSelectPicker
          title="期望就业形式"
          selectKey={expectEmploy.find((p) => p.key === data["aac318"])?.title}
          selectList={expectEmploy}
          onSelect={(v) => handleChange("ccc004", v)}
        />
        <MDrawerPicker
          title={"意向岗位"}
          subTitle="选择岗位"
          value={data.ccc005}
          lList={[]}
          rList={[]}
        />
        <MAreaPicker
          title="意向就业地点"
          name="ccc006"
          data={data}
          onSelect={() => {}}
        />
        <MSelectPicker
          title="期望薪资"
          selectKey={averageIncome.find((p) => p.key === data["ccc007"])?.title}
          selectList={averageIncome}
          onSelect={(v) => handleChange("ccc007", v)}
        />
        {renderMigrantWorkers()}
      </>
    );
  };

  const renderMigrantWorkers = () => {
    return (
      <>
        <MRadioInput
          title="有无就业经历"
          radios={[
            { key: 1, title: "有" },
            { key: 0, title: "无" },
          ]}
          selectKey={data["ccc008"] || 0}
          onSelect={(v) => handleChange("ccc008", v)}
        />
        {!!data.ccc008 && (
          <MSelectPicker
            title="最近一次就业形式"
            selectKey={
              expectEmploy.find((p) => p.key === data["ccc009"])?.title
            }
            selectList={expectEmploy}
            onSelect={(v) => handleChange("ccc009", v)}
          />
        )}
        <MRadioInput
          title="是否退伍军人"
          radios={[
            { key: 1, title: "是" },
            { key: 0, title: "否" },
          ]}
          selectKey={data["ccc010"] || 0}
          onSelect={(v) => handleChange("ccc010", v)}
        />
        <MRadioInput
          title="是否返乡人员"
          radios={[
            { key: 1, title: "是" },
            { key: 0, title: "否" },
          ]}
          selectKey={data["ccc011"] || 0}
          onSelect={(v) => handleChange("ccc011", v)}
        />
      </>
    );
  };

  const renderGoOut = () => {
    return (
      <>
        <MAreaPicker
          title="外出地区"
          name="ccc022"
          data={data}
          onSelect={() => {}}
        />
        <MDrawerPicker
          title={"意向岗位"}
          subTitle="选择岗位"
          value={data.ccc005}
          lList={[]}
          rList={[]}
        />
        {renderMigrantWorkers()}
      </>
    );
  };

  const renderLocalEmploy = () => {
    return (
      <>
        <MAreaPicker
          title="就业地点"
          name="ccc023"
          data={data}
          onSelect={() => {}}
        />
        <MDrawerPicker
          title={"意向岗位"}
          subTitle="选择岗位"
          value={data.ccc005}
          lList={[]}
          rList={[]}
        />
        {renderMigrantWorkers()}
      </>
    );
  };

  const renderEntrance = () => {
    return (
      <>
        <MDatePicker title="预计毕业时间" />
      </>
    );
  };

  const renderForms = () => {
    if (!data.ccc003) return () => {};
    return {
      1: renderUnemployed,
      2: renderEmployed,
      3: renderMigrantWorkers,
      4: renderGoOut,
      5: renderLocalEmploy,
      6: renderEntrance,
    }[data.ccc003];
  };

  return (
    <StepWrap current={3} title="个人劳动力信息">
      <MCard
        title="就业信息"
        extra={
          <View className="text-[#666] text-[30px]">
            <Text className="font-medium text-[#000]">3</Text>
            <Text>/5</Text>
          </View>
        }
      >
        <MSelectPicker
          title="就业状态"
          selectKey={employStatus.find((p) => p.key === data["ccc003"])?.title}
          selectList={employStatus}
          onSelect={(v) => handleChange("ccc003", v)}
        />
        {renderForms()?.()}
      </MCard>
      <ActionBar
        onNext={() =>
          handleNext(
            "pages/manPowerCollection/myWorkInfo/pages/trainInfo/index"
          )
        }
        onPrev={handlePrev}
      />
    </StepWrap>
  );
}
