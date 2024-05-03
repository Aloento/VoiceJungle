import { ProList } from '@ant-design/pro-components';
import { Button, Progress, Space, Tag } from 'antd';
import type { Key } from 'react';
import { useState } from 'react';
import Upload_model from './Upload_model';
import data from '../../../data/model_list.json';
import Train from './Train';
import {
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormRadio,
  ProFormText,
  QueryFilter,
} from '@ant-design/pro-components';
/* json format
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
console.log(data)
*/

export default () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);

  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));


  return (
 
    <ProList<{ title: string }>
      
      rowKey="title"
      headerTitle="Model List"
      toolBarRender={() => {
        return [
          <div>
          <input type="text" placeholder="Search" onChange={(e) => setSearchQuery(e.target.value)} />
          <ul>
            {filteredData.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
        ];
      }}
      expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
      dataSource={filteredData}
      pagination={{
        pageSize: 10,
      }}
      metas={{
        title: {
          dataIndex: 'title',
        },
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
        content: {},
        actions: {
          render: (obj) => {
            const model_name = obj.props.record.title;
            return <a href={`/Model/Train?id=${model_name}`}>choose</a>;
          },
        },
      }}
    />
  );
};