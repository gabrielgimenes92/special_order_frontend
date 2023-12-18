"use client";

import { Button, Modal, Form, Input, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

function AddOrderModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button
        type="default"
        shape="circle"
        icon={<PlusOutlined />}
        onClick={showModal}
      />
      <Modal
        title="New Order"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="addOrder"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 20,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h5>Customer</h5>
          <Form.Item
            label="Customer Name"
            name="customername"
            rules={[{ required: true, message: "Please add customer name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: "Please add a phone number" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: false }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Preferred contact" name="preferredcontact">
            <Radio.Group>
              <Radio value="phone">Phone</Radio>
              <Radio value="email">Email</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Frequency" name="frequency">
            <Radio.Group>
              <Radio value="onetime">One Time</Radio>
              <Radio value="weekly">Weekly</Radio>
              <Radio value="biweekly">Biweekly</Radio>
              <Radio value="monthly">Monthly</Radio>
              <Radio value="seniors">Seniors Day</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>

        <Form
          name="order"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 20,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
        >
          <h5>Order</h5>

          <Form.Item
            label="Product Name"
            name="productname"
            rules={[{ required: true, message: "Please add product name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: "Please add product quantity" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Brand"
            name="brand"
            rules={[{ required: true, message: "Please add product brand" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default AddOrderModal;
