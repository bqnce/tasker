import { Navbar } from "../components/Navbar";
import { FloatingBlob } from "../components/Blob";

export const MainPage = () => {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <Navbar />
      <FloatingBlob />
    </div>
  );
};
