"use client";

import { PlusOutlined } from "@ant-design/icons";
import { ProTable } from "@ant-design/pro-components";
import { useMount } from "ahooks";
import { Button, Input, Modal, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { addDataset, listDatasets } from "./actions";

function Dataset() {
  const [data, setData] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newWorkDir, setNewWorkDir] = useState('');

  useMount(() => refresh());

  const refresh = async () => {
    const datasets = await listDatasets();
    setData(datasets);
  };

  const add = async () => {
    try {
      await addDataset("LJSpeech", newWorkDir);
      message.success('Dataset added successfully');
      setIsModalVisible(false);
    } catch (error: any) {
      message.error(`Failed to add dataset: ${error.message}`);
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Work Directory',
      dataIndex: 'workDir',
      key: 'workDir',
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Link href={`/Dataset/${record.id}`}>
          <Button>View</Button>
        </Link>
      ),
    }
  ];

  return (
    <>
      <ProTable
        columns={columns}
        dataSource={data}
        rowKey="id"
        headerTitle="Datasets"
        toolBarRender={() => [
          <Button type="primary" onClick={() => setIsModalVisible(true)}>
            <PlusOutlined /> Add Dataset
          </Button>,
        ]}
      />
      <Modal
        title="Add New Dataset"
        open={isModalVisible}
        onOk={add}
        onCancel={() => setIsModalVisible(false)}
      >
        <Input
          placeholder="Enter work directory path"
          value={newWorkDir}
          onChange={(e) => setNewWorkDir(e.target.value)}
        />
      </Modal>
    </>
  );
}

export default Dataset;
