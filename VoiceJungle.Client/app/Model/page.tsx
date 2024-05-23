"use client";

import { ProTable } from "@ant-design/pro-components";
import { useMount } from "ahooks";
import { useState } from "react";
import { listModels } from "./actions";

function Model() {
  const [models, setModels] = useState<any[]>([]);

  useMount(() => fetchData());

  const fetchData = async () => {
    const result = await listModels();
    setModels(result);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Path',
      dataIndex: 'path',
      key: 'path',
    },
    {
      title: 'Log Path',
      dataIndex: 'logPath',
      key: 'logPath',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (text) => new Date(text).toLocaleString(),
    },
  ];

  return (
    <ProTable
      columns={columns}
      dataSource={models}
      rowKey="id"
    />
  );
}

export default Model;
