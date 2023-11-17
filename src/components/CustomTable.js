"use client";
import { Table } from "antd";
import React from "react";

const CustomTable = (props) => {
  const dataSource = props.content;
  const columns = props.columns;

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default CustomTable;
