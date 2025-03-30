export const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="h-[92%] flex justify-center items-center">
        
      </div>
    </>
  );
};
