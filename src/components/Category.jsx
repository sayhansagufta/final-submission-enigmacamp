import React from "react";

const Category = ({ number, category }) => {
  return (
    <div
      className="card-item flex flex-row justify-between items-center "
      data-aos="flip-left"
      data-aos-duration="1000"
    >
      <div className="flex flex-row rounded-xl  items-center w-[263px] h-20 p-4 gap-5 border border-gray-500 hover:border-[#FFB400]">
        <div className="rounded-full p-4 bg-[#5647F9]">
          <img src="src/assets/svg/arrow.svg" alt="" />
        </div>
        <div>
          <p className="font-semibold text-base">{category}</p>
          <p className="text-sm text-gray-500">
            <span>{number}</span> catatan
          </p>
        </div>
      </div>
    </div>
  );
};
export default Category;
