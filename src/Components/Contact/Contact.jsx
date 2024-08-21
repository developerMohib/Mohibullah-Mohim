import { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';
// const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Contact = () => {
    const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
        Submit
      </Button>
      </Form>
    </>
    );
};

export default Contact;