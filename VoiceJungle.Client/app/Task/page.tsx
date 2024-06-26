"use client";

import { PlusOutlined } from "@ant-design/icons";
import { ProTable } from "@ant-design/pro-components";
import { useMount } from "ahooks";
import { Button } from "antd";
import { useState } from "react";
import { listTasks } from "./actions";

function Task() {
  const [data, setData] = useState<any[]>([]);

  useMount(() => fetchData());

  const fetchData = async () => {
    const result = await listTasks();
    setData(result);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Dataset',
      dataIndex: 'datasetId',
      key: 'dataset',
    },
    {
      title: 'CurrentEpoch',
      dataIndex: 'currentEpoch',
      key: 'currentEpoch',
    },
    {
      title: 'TargetEpoch',
      dataIndex: 'targetEpoch',
      key: 'targetEpoch',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      valueType: 'option',
      render: (text: any, record: any) => [
        <Button key="detail" type="link" onClick={() => viewDetail(record)}>
          View Detail
        </Button>,
      ],
    },
  ];

  const viewDetail = (record: any) => {
    // Do something when view detail button clicked
    console.log('View detail of task:', record);
  };

  return (
    <ProTable
      columns={columns}
      dataSource={data}
      rowKey="id"
      toolBarRender={() => [
        <Button type="primary" onClick={() => { }}>
          <PlusOutlined /> New Task
        </Button>,
      ]}
    />
  );
}

export default Task;
