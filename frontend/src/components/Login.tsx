import logo from "../assets/logo.png";
import google from "../assets/google.svg";
import { useState } from "react";

export const LoginComponent = () => {
  const [loginWithUsername, setLoginWithUsername] = useState<boolean>(true);
  const [isUsername, setIsUsername] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    setIsUsername(false);
    if (username.length < 3) {
      setError('Username must be at least 3 characters long');
      return;
    }
    setError('');
    setIsUsername(true);
    // Handle successful validation
    console.log('Form submitted with username:', username);
  };

  return (
    <>
      <div className="h-[92%] flex justify-center items-center">
        <div className="h-[350px] w-[600px] border border-[#1a1a1a] rounded">
          <header className="flex justify-center items-center flex-col p-4 gap-5 h-[40%]">
            <img src={logo} height={40} width={40} />
            <span className="text-2xl">
              Welcome to <span className="font-bold">Tasker</span>
            </span>
          </header>
          {loginWithUsername ? (
            <div className="flex justify-center items-center flex-col gap-10 h-[50%] text-medium">
                <input 
                  type="text" 
                  placeholder="Username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`bg-[#060606] p-3 rounded-xl outline-none hover:bg-[#080808] transition-colors duration-300 ${error ? 'border-red-500 border' : ''}`}
                />
                {error && <span className="text-red-500 text-sm -mt-8">{error}</span>}
                <button 
                  onClick={handleSubmit}
                  className="bg-[#0467ff] w-[50%] flex justify-center items-center p-3 rounded-xl hover:bg-[#1471ff] hover:text-[#d6d6d6] transition-color duration-300 text-white cursor-pointer"
                >
                    Continue
                </button>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col gap-6 h-[50%]">
              <a
                href="/login"
                className="bg-blue-500 w-[70%] flex justify-center items-center rounded-xl p-4 gap-2 hover:bg-[#0a6bff] hover:text-[#d6d6d6] transition-color duration-300 text-white"
              >
                Continue with
                <img src={google} height={20} width={20} />
              </a>
              <button
                onClick={() => setLoginWithUsername(true)}
                className="bg-[#0f0f0f] w-[70%] flex justify-center items-center p-4 rounded-xl hover:bg-[#1a1a1a] hover:text-[#d6d6d6] transition-color duration-300 text-white cursor-pointer"
              >
                Continue with username
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
