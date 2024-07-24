import React from "react";
import "./style.css";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center flex-col  text-center    text-secondary bg-backgrounColor font-jd">
      <h1 className="main-text text-[50px] font-semibold animation-bounce-slow">
        Hi, I'm{" "}
        <span className="text-white">
          {" "}
          <ReactTyped
            strings={[
              "Muhammad Junaid",
              "Frontent Developer",
              "UI/UX Designer",
            ]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar=""
            showCursor={true}
          />
        </span>
      </h1>
      <button className="px-[20px] py-[8px] rounded-full  text-[18px] font-bold text-secondary border-secondary border-[1px] hover:text-primary hover:bg-secondary">
        Hire Me
      </button>
    </div>
  );
}

export default Home;
