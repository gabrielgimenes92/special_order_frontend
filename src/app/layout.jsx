import { Inter } from "next/font/google";
import Link from "next/link";
import { Button, Flex, Layout, Menu, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeOutlined } from "@ant-design/icons";
import "./globals.css";

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
        <Layout style={{ minHeight: "100vh" }}>
          <Sider theme="dark" className="sider">
            <Flex justify="center">
              <Link href="/">
                <Button type="primary" shape="circle" icon={<HomeOutlined />} />
              </Link>
            </Flex>
            <SideMenu />
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
