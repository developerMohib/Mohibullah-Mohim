import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

const Education = () => {
  return (
    <Timeline
        mode="alternate"
        items={[
          {
            children: `2020 to present 
            Higher Education 
            I admitted on Mathemathics Depertment at 'Sunamganj Government College, Bangladesh' in June 2020 and now I'm studying there.`,
          },
          {
            children: "Solve initial network problems 2015-09-01",
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
            children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
          },
          {
            color: "red",
            children: "Network problems being solved 2015-09-01",
          },
          {
            children: "Create a services site 2015-09-01",
          },
          {
            dot: (
              <ClockCircleOutlined
                style={{
                  fontSize: "16px",
                }}
              />
            ),
            children: "Technical testing 2015-09-01",
          },
        ]}
      />
  );
};

export default Education;
