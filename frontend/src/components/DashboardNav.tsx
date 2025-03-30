import logo from "../assets/logo.png";
import { FloatingBlob } from "./Blob";

export const DashboardNav = () => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  };
  return (
    <>
      <FloatingBlob />
      <div className="text-lg bold h-[8%] p-5 flex flex-row items-center justify-between">
        <div className="cursor-pointer z-10 flex items-center">
          <img src={logo} height={45} width={45} className="mr-2" />
          <span className="font-medium">Tasker</span>
        </div>
        <div className="p-2 text-base">
          <button
            onClick={handleLogout}
            className="hover:text-[#d6d6d6] transition-color duration-300 bg-[#0f0f0f] rounded-md px-4 py-2 text-white ml-4 hover:bg-[#1a1a1a] cursor-pointer"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};
