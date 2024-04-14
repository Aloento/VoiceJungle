import { ProList } from '@ant-design/pro-components';
import { Button, Progress, Space, Tag } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';
import Upload_model from './Upload_model';

const dataSource = [
  {
    title: 'model1',
    description:'description1'
  },
  {
    title: 'model2',
    description:'description2'
  },
  {
    title: 'model3',
    description:'description3'
  },
  {
    title: 'model4',
    description:'description4'
  },
];

export default () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);

  return (
    <ProList<{ title: string }>
      rowKey="title"
      headerTitle="Model List"
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            Upload model
          </Button>,
        ];
      }}
      expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
      dataSource={dataSource}
      pagination={{
        pageSize: 10,
      }}
      metas={{
        title: {},
        subTitle: {
          render: () => {
            return (
              <Space size={0}>
                <Tag color="blue">tag1</Tag>
                <Tag color="#5BD8A6">tag2</Tag>
              </Space>
            );
          },
        },
        description: {},
        content: {
          render: () => (
            <div
              style={{
                minWidth: 200,
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
            </div>
          ),
        },
        actions: {
          render: () => {
            return <a key="invite">choose</a>;
          },
        },
      }}
    />
  );
};