import { Button, Col, Row, Flex, Space } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";

const Today = () => {
  const stdVerticalSpace = "64px";

  return (
    <div style={{ width: "100%" }}>
      <Header>
        <h1>Today&apos;s Orders</h1>
      </Header>

      <Content>
        <Row
          justify={"center"}
          style={{
            marginTop: stdVerticalSpace,
            marginBottom: stdVerticalSpace,
          }}
        >
          <Button>Add Order</Button>
        </Row>
        <Row justify={"space-around"}>
          <Col span={10}>
            <p>Today&apos;s Orders</p>
          </Col>
          <Col span={10}>
            <p>Today&apos;s incoming stock</p>
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default Today;
