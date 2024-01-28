import React from "react";
import { Button, Form, Input, Select, notification } from "antd";
const { Option } = Select;
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
  required: "${label} boş buraxılmamalıdır!",
  types: {
    email: "${label} düzgün email forması deyil!",
    number: "${label} düzgün nömrə formatı deyil!",
  },
  number: {
    range: "${label} olmalıdı ${min} və ${max} arasında",
  },
};
/* eslint-enable no-template-curly-in-string */

function ContactForm() {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Təşəkkürlər",
      description: "Müraciətiniz uğurla qeydə alındı",
    });
  };
  const onFinish = (values) => {
    console.log(values);
    openNotificationWithIcon("success");
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+994</Option>
        <Option value="87">+90</Option>
      </Select>
    </Form.Item>
  );
  return (
    <>
      {contextHolder}

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
          name="phone"
          label="Telefon"
          rules={[
            {
              type: "number",
              // required: true,
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
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
    </>
  );
}

export default ContactForm;
