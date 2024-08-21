import { useState } from "react";
import { Radio, Tabs } from "antd";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
const MyTabs = () => {
   const tabLabels = ["Skills", "Experience", "Education"];
  const [mode, setMode] = useState("top");

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <div>
        <Skills/>
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
      <Tabs
      defaultActiveKey="0"
      tabPosition={mode}
      items={tabLabels.map((label, i) => {
        return {
          label, 
          key: String(i),
          disabled: i === 3, // If you have a fourth tab to disable
          children: (() => {
            if (i === 0) return <Skills />;
            if (i === 1) return <Experience />;
            if (i === 2) return <Education />;
            return `Content of tab ${i}`;        // Fallback (if needed)
          })(),
        };
      })}
    />
    </div>
  );
};

export default MyTabs;
