import { useEffect } from "react";
import { Dashboard } from "../components/dashboard/Dashboard";
import { DashboardNav } from "../components/dashboard/DashboardNav";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/");
    }
  });

  return (
    <div className="h-screen w-screen bg-black text-white">
      <DashboardNav />
      <Dashboard />
    </div>
  );
};
