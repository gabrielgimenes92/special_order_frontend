import { DeleteOutlined, EditOutlined, FileOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import ItemTable from "../components/ItemTable";

async function fetchData(type) {
  const response = await fetch(`http://localhost:3000/data/${type}.json`);
  const contents = await response.json();

  return contents;
}

const AllOrders = async () => {
  const data = [];

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
      <ItemTable data={data} />
    </>
  );
};

export default AllOrders;
