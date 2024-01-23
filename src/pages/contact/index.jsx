import { Col } from "antd";
import Map from "./components/map";
import ContactForm from "./components/ContactForm";

function ContactPage() {
  return (
    <>
      <Col className="mt-5" xs={24} sm={24} md={12} lg={12} xl={12}>
        <ContactForm />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Map />
      </Col>
    </>
  );
}

export default ContactPage;
