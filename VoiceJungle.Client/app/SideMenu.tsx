import { AppstoreAddOutlined, CodeOutlined, DashboardOutlined, ExperimentOutlined, HddOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";

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
          { key: 1, label: <Link href="/">Dashboard</Link>, icon: <DashboardOutlined /> },
          { key: 2, label: <Link href="/Dataset">Dataset</Link>, icon: <HddOutlined /> },
          { key: 3, label: <Link href="/Task">Task</Link>, icon: <CodeOutlined /> },
          { key: 4, label: <Link href="/Model">Model</Link>, icon: <AppstoreAddOutlined /> },
        ]}
        defaultSelectedKeys={["1"]}
      />
    </Sider>
  );
}
