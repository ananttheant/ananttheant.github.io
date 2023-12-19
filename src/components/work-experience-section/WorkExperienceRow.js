import React, { useEffect, useState } from "react";

import tiktik from "./tiktik1.jpg";
import rsfun from "./rsfun.webp";
import rspslots from "./rspslots.png";
import bigbee1 from "./bigbee1.png";
import bigbee2 from "./bigbee2.png";
import hm from "./hm.jpg";
import slots from "./slots1.png";
import miniclip from "./miniclip.jpeg";
import { classNames } from "../../utils";
// const truncateIfTooLong = (string, length) => {
//   if (string.length < length) return string;
//   return string.substring(0, length - 3) + "...";
// };

const Responsibilties = ({ responsibilities }) => (
  <>
    {responsibilities.map((r, index) => (
      <li className="mb-1" key={index}>
        {r}
      </li>
    ))}
  </>
);
const NoteworthyWorks = ({ noteworthy }) => (
  <>
    {noteworthy.map((nw, index) => (
      <li className="mb-1" key={index}>
        {nw}
      </li>
    ))}
  </>
);

const Image = ({ image, isInverted, isUndisclosed, className = "" }) => {
  let i = null;
  switch (image) {
    case "tiktik":
      i = tiktik;
      break;
    case "rsfun":
      i = rsfun;
      break;
    case "bigbee1":
      i = bigbee1;
      break;
    case "bigbee2":
      i = bigbee2;
      break;
    case "rspslots":
      i = rspslots;
      break;
    case "slots":
      i = slots;
      break;
    case "hm":
      i = hm;
      break;
    case "miniclip":
      i = miniclip;
      break;
    default:
      return null;
  }

  return (
    <>
      <div
        className={`absolute h-full w-full md:w-3/5 overflow-hidden ${
          !isInverted && "right-0"
        }`}
      >
        <div className="w-full h-full relative">
          <img
            src={i}
            alt={image}
            className={`w-full h-full object-cover rounded ${className}`}
          />
          {isUndisclosed && (
            <div className="flex items-center justify-center absolute w-full h-full top-0 left-0 text-9xl font-bold bg-black opacity-30">
              <span>NDA</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const WorkExperienceRow = ({
  image,
  isUndisclosed,
  isInverted,
  product,
  company,
  responsibilities,
  noteworthy,
  tools,
  role,
  link,
  timeline,
  imageClassName = "",
}) => {
  const [currentTab, setCurrentTab] = useState("responsibilities");

  useEffect(() => {
    if (noteworthy.length > 0 && responsibilities.length === 0)
      setCurrentTab("noteworthy-works");
    if (responsibilities.length > 0 && noteworthy.length === 0)
      setCurrentTab("responsibilities");
  }, [noteworthy, responsibilities]);

  return (
    <div className="my-32 max-w-[1024px] mx-auto p-4">
      <div className="relative h-96">
        <Image
          image={image}
          isInverted={isInverted}
          isUndisclosed={isUndisclosed}
          className={imageClassName}
        />
        <div
          className={`p-4 mt-4 flex flex-col ${
            isInverted ? "items-end text-right" : "items-start"
          } justify-center relative h-full z-10 my-auto`}
        >
          <div className="bg-white shadow-lg mb-1 px-2 rounded font-light tracking-wider">
            {company}
          </div>
          <div className="bg-white shadow-lg mb-1 px-2 rounded text-2xl font-semibold">
            {product}
          </div>
          <div className="bg-white shadow-lg px-2 rounded mb-2 text-blue-500">
            {role}
          </div>
          <div className="bg-white shadow-lg px-2 rounded mb-8 text-xs">
            {timeline}
          </div>
          <div className="bg-gray-50 max-w-sm max-h-64 rounded flex flex-col overflow-hidden shadow-lg">
            <div className="flex items-center gap-x-3 mt-2 ml-2">
              {responsibilities.length > 0 && (
                <button
                  className={classNames(
                    "rounded-lg px-2 py-1 bg-white hover:bg-gray-100 shadow-sm",
                    currentTab === "responsibilities" && "!bg-gray-200"
                  )}
                  onClick={() => setCurrentTab("responsibilities")}
                >
                  Responsibilties
                </button>
              )}
              {noteworthy.length > 0 && (
                <button
                  className={classNames(
                    "rounded-lg px-2 py-1 bg-white hover:bg-gray-100 shadow-sm",
                    currentTab === "noteworthy-works" && "!bg-gray-200"
                  )}
                  onClick={() => setCurrentTab("noteworthy-works")}
                >
                  Noteworthy works
                </button>
              )}
            </div>

            <ul className="flex-grow text-sm p-4 overflow-auto mt-2">
              {currentTab === "responsibilities" && (
                <Responsibilties responsibilities={responsibilities} />
              )}
              {currentTab === "noteworthy-works" && (
                <NoteworthyWorks noteworthy={noteworthy} />
              )}
            </ul>
          </div>
          <div className="">{tools}</div>
          <div className="m-4">
            {link && (
              <div className="h-6 w-6 rounded shadow-lg bg-white">
                <a href={link} target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceRow;
