import { useEffect } from "react";
import { Dashboard } from "../components/Dashboard";
import { DashboardNav } from "../components/DashboardNav";

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
