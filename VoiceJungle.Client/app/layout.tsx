import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import { SideMenu } from "./SideMenu";
import "./globals.css";

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>VoiceJungle</title>
      </head>

      <AntdRegistry>
        <ConfigProvider theme={{ cssVar: true, hashed: false }}>
          <body>
            <Layout className="h-screen">
              {SideMenu()}

              <Layout>
                <Header style={{ padding: 0 }} className="!bg-slate-200" />

                <Content style={{ margin: '24px 16px 0' }}>
                  <div
                    className="!bg-slate-200 rounded-md"
                    style={{
                      padding: 24,
                      minHeight: 360,
                    }}
                  >
                    {children}
                  </div>
                </Content>
              </Layout>
            </Layout>
          </body>
        </ConfigProvider>
      </AntdRegistry>
    </html>
  );
}

export default RootLayout;
