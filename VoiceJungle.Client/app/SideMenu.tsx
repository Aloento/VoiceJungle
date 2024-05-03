import { DashboardOutlined, ExperimentOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

export function SideMenu() {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth={0}
      width={256}
      theme="light"
    >
      <header className="flex h-16 pl-6 items-center gap-x-4">
        <ExperimentOutlined className="!text-blue-500 !text-3xl" />

        <h1 className="text-2xl font-medium text-slate-800">
          VoiceJungle
        </h1>
      </header>

      <Menu
        theme="light"
        mode="inline"
        items={[
          { key: "1", label: "Dashboard", icon: <DashboardOutlined /> },
        ]}
        defaultSelectedKeys={["1"]}
      />
    </Sider>
  );
}
