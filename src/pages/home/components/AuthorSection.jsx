import Section from "@/components/ui/section";
import { Col, Row } from "antd";
import AuthorSkleton from "../../../components/widgets/author/AuthorSkleton";
import AuthorItem from "../../../components/widgets/author/AuthorItem";
function AuthorSection({ title, items = [], loading }) {
  return (
    <Section title={title}>
      <Row className="space-x-[25px] " gutter={[10, 16]}>
        {items.map((item, index) => (
          <Col className="!p-0" key={index} xs={{ span: 4 }} lg={{ span: 4 }}>
            {loading ? (
              <>
                <AuthorSkleton />
              </>
            ) : (
              <AuthorItem item={item} />
            )}
          </Col>
        ))}
      </Row>
    </Section>
  );
}

export default AuthorSection;