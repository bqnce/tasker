import logo from "../assets/logo.png";
import { FloatingBlob } from "./design/Blob";

export const Navbar = () => {
  return (
    <>
      <FloatingBlob />
      <div className="text-lg bold h-[8%] p-5 flex flex-row items-center justify-between">
        <a href="/" className="cursor-pointer z-10 flex items-center">
          <img src={logo} height={45} width={45} className="mr-2" />
          <span className="font-medium">Tasker</span>
        </a>
        <div className="p-2 text-base">
          <a
            href="/login"
            className="hover:text-[#d6d6d6] transition-color duration-300"
          >
            Login
          </a>
          <a
            href="/register"
            className="hover:text-[#d6d6d6] transition-color duration-300 bg-[#1f1f1f] rounded-md px-4 py-2 text-white ml-4 hover:bg-[#1a1a1a]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};
