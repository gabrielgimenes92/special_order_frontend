import { Inter } from "next/font/google";
import Link from "next/link";
import { Button, Flex, Layout, Menu, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";
import "./globals.scss";

import SideMenu from "./components/SideMenu";
import PageHeader from "./components/PageHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Special Order",
  description: "New special order system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout style={{ height: "100vh" }}>
          <Sider theme="dark" className="sider">
            <Flex vertical align="center" justify="space-between">
              <div>
                <Flex vertical align="center">
                  <Link href="/">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<HomeOutlined />}
                    />
                  </Link>
                  <SideMenu />
                </Flex>
              </div>
              <Button type="default" shape="circle" icon={<PlusOutlined />} />
            </Flex>
          </Sider>
          <Layout>
            <Header className="header">
              <PageHeader />
            </Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
