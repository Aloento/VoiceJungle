import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import React from "react";
import "./db";
import "./globals.css";

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>Gaussian Energy</title>
      </head>

      <AntdRegistry>
        <ConfigProvider theme={{ cssVar: true, hashed: false }}>
          <body className="flex items-center justify-center h-screen bg-slate-200">
            {children}
          </body>
        </ConfigProvider>
      </AntdRegistry>
    </html>
  );
}

export default RootLayout;
