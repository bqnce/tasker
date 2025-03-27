import { Center } from "../components/Center";
import { Navbar } from "../components/Navbar";

export const MainPage = () => {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <Navbar />
      <Center />
    </div>
  );
};
