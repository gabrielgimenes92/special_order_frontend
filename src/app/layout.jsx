import { Inter } from "next/font/google";
import { Flex, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";

import "./globals.scss";

import SideMenu from "./components/SideMenu";
import PageHeader from "./components/PageHeader";
import AddOrderModal from "./components/AddOrderModal";

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
                  <SideMenu />
                </Flex>
              </div>
              <AddOrderModal />
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
