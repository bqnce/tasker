import { useEffect, useState } from "react";
import { Dashboard } from "../components/dashboard/Dashboard";
import { DashboardNav } from "../components/dashboard/DashboardNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/");
    }
    axios
      .get("http://localhost:5000/api/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUsername(response.data.user.username);
        setUserId(response.data.user.id);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="h-screen w-screen bg-black text-white">
      <DashboardNav />
      <Dashboard username={username} />
    </div>
  );
};
