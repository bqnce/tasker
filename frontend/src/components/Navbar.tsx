import logo from "../assets/logo.png";
import { FloatingBlob } from "./Blob";

export const Navbar = () => {
  return (
    <>
      <FloatingBlob />
      <div className="text-xl bold h-[8%] p-5 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <img src={logo} height={45} width={45} className="mr-2" />
          Tasker
        </div>
        <div className="p-2 text-lg">
          <a href="/login" className="hover:text-[#d6d6d6] transition-color duration-300">Login</a>
          <span className="font-light mr-2 ml-2">or</span>
          <a href="/register" className="hover:text-[#d6d6d6] transition-color duration-300">Sign Up</a>
        </div>
      </div>
    </>
  );
};
