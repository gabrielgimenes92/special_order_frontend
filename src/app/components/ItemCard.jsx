"use server";

import { DeleteOutlined, EditOutlined, FileOutlined } from "@ant-design/icons";
import { Button, Card, Space, Table } from "antd";

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Item Number", dataIndex: "itemNumber", key: "item number" },
  { title: "Animal", dataIndex: "animal", key: "animal" },
  { title: "Product", dataIndex: "product", key: "product" },
  { title: "Brand", dataIndex: "brand", key: "brand" },
  { title: "Quantity", dataIndex: "quantity", key: "quantity" },
  { title: "Distributor", dataIndex: "distributor", key: "distributor" },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];

const data = [];

async function fetchData(type) {
  const response = await fetch(`http://localhost:3000/data/${type}.json`);
  const contents = await response.json();

  return contents;
}

const ItemCard = async () => {
  const orders = await fetchData("orders");
  const products = await fetchData("products");
  const distributors = await fetchData("distributors");

  orders.map((order) => {
    const product = order.products.map((productId) =>
      products.find((product) => product.id === productId)
    );

    product.forEach((prod) => {
      const distributor = distributors.find(
        (dist) => dist.id === prod.distributor
      );

      data.push({
        key: data.length + 1,
        name: order.customer.name,
        itemNumber: prod.itemNumber,
        animal: prod.animal,
        product: prod.description,
        brand: prod.brand,
        quantity: prod.quantity,
        distributor: distributor.name,
        actions: (
          <Space size="small">
            <Button>
              <FileOutlined />
            </Button>
            <Button>
              <EditOutlined />
            </Button>
            <Button>
              <DeleteOutlined />
            </Button>
          </Space>
        ),
      });
    });
  });

  return (
    <>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
};

export default ItemCard;
