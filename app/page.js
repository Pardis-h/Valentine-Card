"use client";
import { useState } from "react";

export default function Home() {
  const [check, setCheck] = useState(false);
  return (
    <main className="flex w-full bg-red-400 h-screen items-center justify-center p-24">
      <div
        //  style={{transformStyle:'preserve-3d',transform: perspective('2500px')}}
        className="relative w-80 h-80 valentines-day-card"
      >
        <input
          className="hidden peer/draft"
          type="checkbox"
          name="open"
          id="open"
          onChange={() => setCheck(!check)}
        />
        <label
          htmlFor="open"
          className={`absolute w-80 h-80 bg-transparent left-0 top-0 cursor-pointer z-10`}
        ></label>
        <div
          className={`relative w-80 h-80 origin-left shadow-custom1 duration-300 bg-red-100
        before:absolute before:content-[''] before:w-72 before:h-72 before:bg-red-500 before:top-4 before:left-4
        peer-checked/draft:rotate-[-155deg] card-front`}
        >
          <p
            className={`relative w-52 h-40 bg-red-100 top-20 left-14 text-[#333] text-4xl flex justify-center items-center
            drop-shadow-lg text-center
            before:absolute before:content-[''] before:bg-red-600 before:w-10 before:h-10 before:rotate-[-45deg] before:top-[-20px] before:left-[80px]
            after:absolute after:content-[''] after:bg-red-600 after:w-10 after:h-10 after:rounded-[50%] after:top-[-35px] after:left-[65px] after:shadow-custom3
            `}
          >
            Click to open :)
          </p>
        </div>
        <div
          className={`absolute w-80 h-80 bg-red-100 -z-10 left-0 top-0 shadow-custom2`}
        >
          <p
            className={`
          absolute text-[#333] text-3xl top-[50px] w-80 text-center
          before:absolute before:left-[5px] before:text-center before:w-80 before:content-["Valentine's"] before:top-[40px] before:text-red-600
          after:absolute after:left-[5px] after:text-center after:w-80 after:content-["day!"] after:top-[80px]
          `}
          >
            Happy
          </p>
          <p className="absolute text-[#333] top-[20px] text-xl text-center w-80">Eshghe ghashangam</p>
          <div
            className={`heart relative bg-red-600 h-16 w-16 top-[220px] left-[120px] rotate-[-45deg] 
          before:absolute before:content-[''] before:bg-red-600 before:w-16 before:h-16 before:rounded-[50%] before:top-[-30px] before:left-0
          after:absolute after:content-[''] after:bg-red-600 after:w-16 after:h-16 after:rounded-[50%] after:left-[30px] after:top-0 
          `}
          ></div>
          <div
            className={`smile absolute w-8 h-4 bg-[#333] z-10 rounded-br-[100px] rounded-bl-[100px] top-[240px] left-[136px] overflow-hidden
            before:absolute before:content-[''] before:w-5 before:h-5 before:bg-[#030202] before:rounded-[50%] before:top-[5px] before:left-[5px]
            `}
          ></div>
          <div className="eyes absolute rounded-[50%] w-[10px] h-[10px] z-10 bg-[#333] top-[230px] left-[166px] shadow-custom4"></div>
          <div className={`hearts ${!!check ? "block" : "hidden"} `}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
