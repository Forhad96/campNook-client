import DashboardHeader from "@/components/layout/dashboardLayout/DashboardHeader";
import DashboardSidebar from "@/components/layout/dashboardLayout/DashboardSidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <div className="flex flex-col">
        <DashboardHeader />

        <Outlet />
      </div>
    </div>
  );
}
