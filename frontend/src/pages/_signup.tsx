import { Navbar } from "../components/Navbar";
import { SignUpComponent } from "../components/signup/SignUp";

export const SignUpPage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-black text-white">
        <Navbar />
        <SignUpComponent />
      </div>
    </>
  );
};
