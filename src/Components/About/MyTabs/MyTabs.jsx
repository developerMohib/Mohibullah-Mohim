import { useState } from "react";
import { Radio, Tabs } from "antd";
import Skills from "../Skills";
import Experience from "../Experience";
import Education from "../Education";
const MyTabs = () => {

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
        defaultActiveKey="1"
        tabPosition={mode}
        style={{
        //   height: 220,
        }}
        items={new Array(4).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: `Tab-${ Number(id)+1}`,
            key: id,
            disabled: i === 3,
            children: (() => {
                if (id === "0") return <Skills/>;
                if (id === "1") return  <Experience/> ;
                if (id === "2") return  <Education/> ;
                return `Content of tab ${Number(id)}`;
              })(),
              // children: `Content of tab ${ Number(id) + 1}`,
          };
        })}
      />
    </div>
  );
};

export default MyTabs;
