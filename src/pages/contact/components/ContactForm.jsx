import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const ContactForm = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={["user", "name"]}
      label="Ad"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "email"]}
      label="Email"
      rules={[
        {
          type: "email",
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "age"]}
      label="Yaş"
      rules={[
        {
          type: "number",
          min: 0,
          max: 99,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item name={["user", "website"]} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={["user", "introduction"]} label="Təklif və ya irad">
      <Input.TextArea />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button className="text-skyBlue" type="primary" htmlType="submit">
        Təsdiqlə
      </Button>
    </Form.Item>
  </Form>
);
export default ContactForm;
