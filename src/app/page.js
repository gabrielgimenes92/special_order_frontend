import React from "react";
import { Button, Layout, Space } from "antd";
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
      <CustomTable content={contentTable1} columns={columnTable1} />
      <CustomTable content={contentTable2} columns={columnTable2} />
    </Space>
  );
};

export default Home;
