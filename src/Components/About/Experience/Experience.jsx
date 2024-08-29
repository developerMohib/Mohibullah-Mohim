import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

const Experience = () => {
  return (
    <Timeline
      mode="alternate"
      items={[
        {
          children: "Front End Development with React, Next, Typescript",
        },
        {
          children:
            "Beck End Development Node, Express, and Nessesary technical thing",
          color: "green",
        },
        {
          dot: (
            <ClockCircleOutlined
              style={{
                fontSize: "16px",
              }}
            />
          ),
          children: `For Authentication, use Firebase and For Database, use MongoDB`,
        },
        {
          color: "red",
          children:
            "Tailwind, Bootstrap, DaisyUi, Metarial Ui, Ant Design, Framer Motion",
        },
        {
          children: "If nessesay use Technical other thing",
        },
        {
          dot: (
            <ClockCircleOutlined
              style={{
                fontSize: "16px",
              }}
            />
          ),
          children:
            "I have completed multiple web application with using this, Please check out my github",
        },
      ]}
    />
  );
};

export default Experience;
