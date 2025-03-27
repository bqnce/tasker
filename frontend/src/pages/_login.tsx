import { LoginComponent } from "../components/Login";
import { Navbar } from "../components/Navbar";

export const LoginPage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-black text-white">
        <Navbar />
        <LoginComponent />
      </div>
    </>
  );
};
