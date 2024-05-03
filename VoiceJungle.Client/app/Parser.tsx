"use client";

import { InboxOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";

export function Parser() {
  return <div className="flex">
    <Dragger
      action="/api"
      accept=".log"
      maxCount={1}
      className="h-fit"
      onChange={(info) => {
        console.log(info);
      }}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag log file to this area to upload
      </p>
    </Dragger>
  </div>;
}
