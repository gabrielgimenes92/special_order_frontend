import { Card, Space, Table } from "antd";
import orders from "../data/orders";
import customers from "../data/customers";
import products from "../data/products";
import distributors from "../data/distributors";

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Item Number", dataIndex: "itemNumber", key: "item number" },
  { title: "Animal", dataIndex: "animal", key: "animal" },
  { title: "Product", dataIndex: "product", key: "product" },
  { title: "Brand", dataIndex: "brand", key: "brand" },
  { title: "Quantity", dataIndex: "quantity", key: "quantity" },
  { title: "Distributor", dataIndex: "distributor", key: "distributor" },
];

const data = [];

orders.map((order) => {
  const customer = customers.find((cust) => cust.id === order.customer);

  const product = order.products.map((productId) =>
    products.find((product) => product.id === productId)
  );

  const distributor = distributors.find(
    (dist) => dist.id === product[0].distributor
  );

  data.push({
    key: order.id,
    name: `${customer.firstName} ${customer.lastName}`,
    itemNumber: product[0].itemNumber,
    animal: product[0].animal,
    product: product[0].description,
    brand: product[0].brand,
    quantity: product[0].quantity,
    distributor: distributor.name,
  });
});

const ItemCard = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default ItemCard;
