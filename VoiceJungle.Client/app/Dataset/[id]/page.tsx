"use client";

import { ProTable } from "@ant-design/pro-components";
import { useMount } from "ahooks";
import { useState } from "react";
import { getDataset } from "../actions";

export default function DatasetDetailPage({ params: { id } }: { params: { id: string } }) {
  const [tableData, setTableData] = useState<[string, string, string][]>([]);

  useMount(() => {
    const int = parseInt(id);
    getDataset(int).then((data: any) => {
      setTableData(data);
    });
  });

  return (
    <ProTable
      columns={[
        {
          title: "Audio File",
          dataIndex: 0
        },
        {
          title: "Transcript",
          dataIndex: 1
        }
      ]}
      dataSource={tableData}
    />
  );
}
