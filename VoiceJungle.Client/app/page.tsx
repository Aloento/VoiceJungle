import { Divider } from "antd";
import { Header } from "./Header";
import { Parser } from "./Parser";

function Home() {
  return (
    <div className="flex flex-col px-6 pt-4 pb-6 w-full max-w-screen-lg min-w-96 bg-white shadow rounded-md gap-y-4">
      <Header />

      <Divider className="!m-0" />

      <Parser />
    </div>
  );
}

export default Home;
