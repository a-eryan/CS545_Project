import React from "react";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import LoginCard from "./UI/LoginCard";

const LoginPage: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/campus.png)" }}
      />

      <header className="relative h-16 bg-[#8C2938]">
        <div
          className="absolute top-0 left-25 transform -translate-x-1/2
                   bg-white w-25 h-30 flex justify-center"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
          }}
        >
          <img src="/logo2x.png" alt="Stevens logo" className="h-24 w-auto" />
        </div>
        <LoginCard />

        <button className="absolute top-0 right-6 h-16 flex items-center">
          <HiOutlineQuestionMarkCircle className="w-8 h-8 text-white" />
        </button>
      </header>
      {/* Centered card */}
    </div>
  );
};

export default LoginPage;
