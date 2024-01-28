import { Form, Switch } from "antd";

function FormDarkMode() {
  return (
    <Form.Item className="mb-0" valuePropName="checked">
      <Switch className="w-20 !outline font-bold !outline-1 !outline-amberBlack" />
    </Form.Item>
  );
}

export default FormDarkMode;
