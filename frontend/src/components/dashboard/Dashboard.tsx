interface DashboardProps {
  username: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ username }) => {
  return (
    <>
      <div className="h-[92%] flex justify-center">
        Welcome back, <span className="font-bold ml-1">{username}</span>!
      </div>
    </>
  );
};
