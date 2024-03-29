import { Flex } from "antd";
import { lazy } from "react";

const Sidebar = lazy(() => import("./components/Sidebar"));
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <Flex gap={10} className="h-screen md:p-4 p-2 md:flex-row flex-col ">
      <Sidebar />
      <Dashboard />
    </Flex>
  );
}

export default App;
