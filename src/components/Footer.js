import React from "react";
import linkedin from "./linkedin.png";

const Footer = () => {
  return (
    <div className="text-center w-full mt-32 mb-16">
      <div className="text-xs">
        Developed by Anant Sharma | 2018 <br /> Inspired by Joeb Rogers
      </div>
      <div className="flex items-center uppercase font-semibold p-4 w-full justify-center">
        <a href="mailto:ananttheant4444@gmail.com" className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/anant-sharma-game"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" className="h-8" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
