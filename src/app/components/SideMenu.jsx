import Link from "next/link";
import { Menu } from "antd";

import {
  PhoneOutlined,
  CarryOutOutlined,
  ShopOutlined,
  CarOutlined,
  ShoppingOutlined,
  FireOutlined,
  HomeOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon) {
  return {
    label,
    key,
    icon,
  };
}

const items = [
  getItem(<Link href="/">Home</Link>, "1", <HomeOutlined />),
  getItem(
    <Link href="../allOrders">View all orders</Link>,
    "2",
    <FireOutlined />
  ),
  getItem(
    <Link href="../todayOrder">Today&apos;s order</Link>,
    "3",
    <ShoppingOutlined />
  ),
  getItem(
    <Link href="../todayDelivery">Today&apos;s delivery</Link>,
    "4",
    <CarOutlined />
  ),
  getItem(<Link href="../contact">Contact list</Link>, "5", <PhoneOutlined />),
  getItem(
    <Link href="../pickup">Ready for pickup</Link>,
    "6",
    <CarryOutOutlined />
  ),
  getItem(
    <Link href="../distributors">View distributors</Link>,
    "7",
    <ShopOutlined />
  ),
];

const SideMenu = () => {
  return <Menu theme="dark" mode="inline" items={items} />;
};

export default SideMenu;
