import logo from "../../assets/logo.png";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const SignUpComponent = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (username.length === 0 || password.length === 0) {
      setError("Please enter both username and password.");
      return;
    }

    setError("");

    axios
      .post("http://localhost:5000/api/auth/register", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Registered successfully!", {
          position: "bottom-right",
          style: {
            background: "#050505",
            color: "#fff",
            border: "1px solid #0f0f0f",
          },
        });
        setTimeout(() => {
          localStorage.setItem("accessToken", res.data.accessToken);
          navigate("/dashboard");
        }, 1000);
      })
      .catch((err) => {
        console.log(err);

        const errorMessage =
          err.response?.data?.message ||
          "Registration failed. Please try again.";

        toast.error(errorMessage, {
          position: "bottom-right",
          style: {
            background: "#050505",
            color: "#fff",
            border: "1px solid #0f0f0f",
          },
        });
      });
  };

  return (
    <>
      <div className="h-[92%] flex justify-center items-center">
        <div className="h-[500px] w-[600px] border border-[#1a1a1a] rounded">
          <header className="flex justify-center items-center flex-col p-4 gap-5 h-[35%]">
            <img src={logo} height={40} width={40} />
            <span className="text-2xl">
              Welcome to <span className="font-bold">Tasker</span>
            </span>
          </header>
          <div className="flex justify-center items-center h-[30%] flex-col gap-5">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`bg-[#060606] p-3 rounded-xl outline-none hover:bg-[#080808] transition-colors duration-300 border border-[#1a1a1a] ${
                error ? "border-red-500 border" : ""
              }`}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`bg-[#060606] p-3 rounded-xl outline-none hover:bg-[#080808] transition-colors duration-300 border border-[#1a1a1a] ${
                error ? "border-red-500 border" : ""
              }`}
            />
          </div>
          <div className="flex justify-center items-center flex-col h-[35%] gap-5">
            {error && <span className="text-red-500">{error}</span>}
            <button
              className="bg-blue-500 w-[70%] flex justify-center items-center rounded-xl p-4 gap-2 hover:bg-[#0a6bff] hover:text-[#d6d6d6] transition-color duration-300 text-white cursor-pointer"
              onClick={handleRegister}
            >
              Sign Up
            </button>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};
