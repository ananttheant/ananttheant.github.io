import tiktik from "./tiktik.jpg";
import rsfun from "./rsfun.webp";
import rspslots from "./rspslots.png";
import bigbee1 from "./bigbee1.png";
import bigbee2 from "./bigbee2.png";
import hm from "./hm.png";
import slots from "./slots.jpg";
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

const Image = ({ image, isInverted }) => {
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
        <img
          src={i}
          alt={image}
          className=" w-full h-full object-cover rounded"
        />
      </div>
      <div className="absolute h-full w-full md:hidden bg-black opacity-30"></div>
    </>
  );
};

const WorkExperienceRow = ({
  image,
  isInverted,
  product,
  company,
  description,
  tools,
  role,
}) => {
  return (
    <div className="my-32 max-w-[1024px] mx-auto p-4">
      {!isInverted && (
        <div className="relative h-96">
          <Image image={image} isInverted={isInverted} />
          <div className="p-4 mt-4 flex flex-col items-start justify-center relative h-full z-10 my-auto">
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
            <div>{tools}</div>
          </div>
        </div>
      )}
      {isInverted && (
        <div className="relative h-96">
          <Image image={image} isInverted={isInverted} />
          <div
            className={`p-4 mt-4 flex flex-col items-end justify-center relative h-full z-10 my-auto text-right`}
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
            <div>{tools}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperienceRow;
