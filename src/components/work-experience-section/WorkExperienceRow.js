import tiktik from "./tiktik1.jpg";
import rsfun from "./rsfun.webp";
import rspslots from "./rspslots.png";
import bigbee1 from "./bigbee1.png";
import bigbee2 from "./bigbee2.png";
import hm from "./hm.jpg";
import slots from "./slots1.png";
import React from "react";

// const truncateIfTooLong = (string, length) => {
//   if (string.length < length) return string;
//   return string.substring(0, length - 3) + "...";
// };

const Description = ({ description }) => (
  <div className="bg-gray-50 max-w-sm overflow-auto rounded py-4 overflow-hidden shadow-lg">
    <ul className="text-sm max-h-36 px-4 overflow-auto">
      {description.map((d, index) => (
        <li className="mb-1" key={index}>
          {d}
        </li>
      ))}
    </ul>
  </div>
);

const Image = ({ image, isInverted, isUndisclosed }) => {
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
            className="w-full h-full object-cover rounded"
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
  description,
  tools,
  role,
  link,
}) => {
  return (
    <div className="my-32 max-w-[1024px] mx-auto p-4">
      <div className="relative h-96">
        <Image
          image={image}
          isInverted={isInverted}
          isUndisclosed={isUndisclosed}
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
          <div className="bg-white shadow-lg mb-4 px-2 rounded mb-8 text-blue-500">
            {role}
          </div>
          <Description description={description} />
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
