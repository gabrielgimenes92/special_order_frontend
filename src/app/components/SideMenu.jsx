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
  getItem(
    <Link href="../allOrders">View all orders</Link>,
    "1",
    <FireOutlined />
  ),
  getItem(
    <Link href="../todayOrder">Today&apos;s order</Link>,
    "2",
    <ShoppingOutlined />
  ),
  getItem(
    <Link href="../todayDelivery">Today&apos;s delivery</Link>,
    "3",
    <CarOutlined />
  ),
  getItem(<Link href="../contact">Contact list</Link>, "4", <PhoneOutlined />),
  getItem(
    <Link href="../pickup">Ready for pickup</Link>,
    "5",
    <CarryOutOutlined />
  ),
  getItem(
    <Link href="../distributors">View distributors</Link>,
    "6",
    <ShopOutlined />
  ),
];

const SideMenu = () => {
  return <Menu theme="dark" mode="inline" items={items} />;
};

export default SideMenu;
