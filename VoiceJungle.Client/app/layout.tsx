import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
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
            <Layout className="!min-h-screen" >
              <SideMenu />

              <Layout>
                <Header className="!bg-white flex justify-end">
                  123
                </Header>

                <Content className="pt-6 px-4">
                  <main className="!bg-white rounded-md p-6 min-h-96">
                    {children}
                  </main>
                </Content>

                <Footer className="text-center">
                  VoiceJungle ©{new Date().getFullYear()}
                </Footer>
              </Layout>
            </Layout>
          </body>
        </ConfigProvider>
      </AntdRegistry>
    </html>
  );
}

export default RootLayout;
