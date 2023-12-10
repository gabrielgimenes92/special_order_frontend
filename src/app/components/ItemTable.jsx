"use client";
import { Table } from "antd";

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Item Number", dataIndex: "itemNumber", key: "item number" },
  { title: "Animal", dataIndex: "animal", key: "animal" },
  { title: "Product", dataIndex: "product", key: "product" },
  { title: "Brand", dataIndex: "brand", key: "brand" },
  { title: "Quantity", dataIndex: "quantity", key: "quantity" },
  {
    title: "Distributor",
    dataIndex: "distributor",
    key: "distributor",
    filters: [
      {
        text: "Avafina",
        value: "Avafina",
      },
      {
        text: "PV",
        value: "PV warehouse",
      },
      {
        text: "Jamiesons",
        value: "Jamiesons",
      },
      {
        text: "RDBK",
        value: "Red Dog Blue Kat",
      },
    ],
    onFilter: (value, record) => record.distributor.indexOf(value) === 0,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];

const ItemCard = ({ data }) => {
  return (
    <>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
};

export default ItemCard;
