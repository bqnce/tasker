import { useEffect } from "react";
import { Dashboard } from "../components/dashboard/Dashboard";
import { DashboardNav } from "../components/dashboard/DashboardNav";

export const DashboardPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      window.location.href = "/login";
    }
  });

  return (
    <div className="h-screen w-screen bg-black text-white">
      <DashboardNav />
      <Dashboard />
    </div>
  );
};
