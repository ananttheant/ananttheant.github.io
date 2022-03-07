import React from "react";
import potion from "./icon-potion.gif";
import book from "./book.gif";

const Section = ({ heading, icon, children }) => {
  return (
    <div className="container mx-auto my-32 p-4 grid gap-8 grid-cols-1 lg:grid-cols-7 lg:gap-16 lg:items-start">
      <div className="lg:col-span-1 lg:text-right">
        <div className="mb-4 text-blue-500 font-semibold uppercase tracking-widest">
          {heading}
        </div>
        <div className="flex w-full lg:justify-end">
          {icon === "potion" && (
            <img src={potion} alt="icon" className="w-16" />
          )}
          {icon === "book" && <img src={book} alt="icon" className="w-16" />}
        </div>
      </div>
      <div className="lg:col-span-6">{children}</div>
    </div>
  );
};

export default Section;
