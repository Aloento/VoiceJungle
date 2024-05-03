import { ExperimentOutlined } from "@ant-design/icons";

export function Header() {
  return (
    <header className="flex h-12 items-center gap-x-4">
      <ExperimentOutlined className="!text-cyan-500 !text-3xl" />

      <h1 className="text-2xl font-medium text-slate-600">
        Gaussian Free Energy Reader
      </h1>
    </header>
  );
}
