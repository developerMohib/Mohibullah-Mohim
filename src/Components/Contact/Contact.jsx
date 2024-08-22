import { useState } from "react";

import { Button, Checkbox, DatePicker, Form, Input, InputNumber } from "antd";

const { TextArea } = Input;

const Contact = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      <div className="md:grid grid-cols-2 gap-4">
        <div className="grid-cols-1">
          <p>write something here</p>
        </div>
        <div className="grid-cols-1">
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
            <Form.Item label="Name">
              <Input />
            </Form.Item>
            <Form.Item label="Email">
              <Input />
            </Form.Item>
            <Form.Item label="Mobile Number">
              <InputNumber className="w-full" />
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item label="TextArea">
              <TextArea rows={4} />
            </Form.Item>
            <div className="text-center">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
