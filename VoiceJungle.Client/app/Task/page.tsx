import { ProTable } from "@ant-design/pro-components";
import { useMount } from "ahooks";
import { Button } from "antd";
import { useState } from "react";

function Task() {
  const [data, setData] = useState<any[]>([]);

  useMount(() => {
    fetchData();
  });

  const fetchData = async () => {
    const result = await getTaskList();
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
      dataIndex: 'dataset',
      key: 'dataset',
    },
    {
      title: 'Epochs',
      dataIndex: 'epochs',
      key: 'epochs',
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
    />
  );
}

export default Task;
