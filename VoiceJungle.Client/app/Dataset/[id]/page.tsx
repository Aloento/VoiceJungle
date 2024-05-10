"use client";

import { ProTable } from "@ant-design/pro-components";
import { useMount } from "ahooks";
import { Input, message } from "antd";
import { unparse } from "papaparse";
import path from "path";
import { useState } from "react";
import { getDataset } from "../actions";

export default function DatasetDetailPage({ params: { id } }: { params: { id: string } }) {
  const [tableData, setTableData] = useState<[string, string, string][]>([]);

  useMount(() => {
    const int = parseInt(id);
    getDataset(int).then((data) => {
      console.log(data);
      setTableData(data);
    });
  });

  // 保存更改到 CSV 文件
  const saveChanges = (newData) => {
    const csvString = unparse(newData);
    message.success('Changes saved successfully');
  };

  const columns = [
    {
      title: 'Text',
      dataIndex: 'text',
      render: (text, record, _, action) => (
        <Input
          defaultValue={text}
          onBlur={(e) => {
            const newText = e.target.value;
            const newRecord = { ...record, text: newText };
            const newData = tableData.map((item) => (item.id === record.id ? newRecord : item));
            setTableData(newData);
            saveChanges(newData);
          }}
        />
      ),
    },
    {
      title: 'Audio',
      dataIndex: 'audio',
      render: (_, record) => (
        <audio controls>
          <source src={`file://${path.join(dataset.workDir, 'wavs', record.audio)}`} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      ),
    },
  ];

  return (
    <ProTable
      columns={columns}
      dataSource={tableData}
      rowKey="id"
      search={false}
      pagination={false}
    />
  );
}
