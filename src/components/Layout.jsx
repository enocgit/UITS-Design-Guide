import { Outlet } from "react-router-dom";
import HiddenSidebar from "./HiddenSidebar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="grid grid-cols-12">
        <HiddenSidebar />
        <div className="col-span-11">
          <Outlet />
        </div>
      </div>
    </>
  );
}
