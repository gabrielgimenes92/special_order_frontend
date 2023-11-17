import React from "react";
import { Button, Flex, Layout, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import CustomTable from "@/components/CustomTable";
import table1 from "../resources/dummyOrders.json";
import table2 from "../resources/dummyDistributors.json";

const Home = () => {
  const contentTable1 = table1.dummyOrders;
  const columnTable1 = table1.columns;

  const contentTable2 = table2.dummyDistributors;
  const columnTable2 = table2.columns;

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <h1>Dashboard</h1>
      <button style={{ width: "200px" }}>Add new order</button>
      <Flex justify="space-evenly">
        <Space direction="vertical">
          <Flex justify="space-between">
            <h1>Table 1</h1>
            <button>View all</button>
          </Flex>
          <CustomTable content={contentTable1} columns={columnTable1} />
        </Space>
        <Space direction="vertical">
          <Flex justify="space-between">
            <h1>Table 2</h1>
            <button>View all</button>
          </Flex>
          <CustomTable content={contentTable2} columns={columnTable2} />
        </Space>
      </Flex>
    </Space>
  );
};

export default Home;
