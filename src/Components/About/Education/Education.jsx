import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

const Education = () => {
  return (
    <Timeline
      mode="alternate"
      items={[
        {
          children: ` 2020 to Present, Higher Education, I was admitted to the Mathematics Department at 'Sunamganj Government College, Bangladesh' in June 2020, and I am currently studying there.`,
        },
        {
          children: "In the other hand, june 2024, I completed my web design and development course from Programing Hero",
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
          children: `2017 to 2019, Higher Secondary,  I admitted on class Eleven at 'Sunamganj Government College' in 2017 and studied there till class Twelve (2019).`,
        },
        {
          color: "red",
          children: "january 2020 to August 2020, I have completed Basic computer and self thought",
        },
        {
          children: "2012 to 2017, Secondary Education, I admitted on class six at 'Government Jubilee high School, Sunamganj' in 2012 and studied there till class Ten (2017).",
        },
        {
          dot: (
            <ClockCircleOutlined
              style={{
                fontSize: "16px",
              }}
            />
          ),
          children: "To keep update myself, i always learn technical new something after completed basic computer",
        },
      ]}
    />
  );
};

export default Education;
