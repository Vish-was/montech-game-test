import { useRouter } from "next/router";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ChessWidget from "../../widget/chess";

const SpectatedGamePlay = () => {
  const route = useRouter();
  return (
    <div className="bg-[#202020] ">
      <div className="flex items-center pt-6 px-12">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => route.back()}
        >
          <MdOutlineKeyboardArrowLeft className="text-white text-[13.27px] font-bold" />
          <span className="text-white text-[13.27px] font-bold">Go Back</span>
        </div>
        <div className="m-auto">
          <p className="text-white font-bold text-[26px]">SPECTATING</p>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="flex gap-[24.2rem]">
          <div className="relative border-0 w-[43px] h-[43px] border-solid bg-[#383531] rounded-lg">
            <FaUserAlt className="text-[#BDBDBD] text-[30px] absolute bottom-[2px] left-[6px]" />
            <p className="font-bold text-[16px] text-[#BDBDBD] absolute bottom-2 left-12">
              Opponent
            </p>
          </div>
          <div className="relative border-0 w-[129px] h-[43px] border-solid bg-[#383531] rounded-lg">
            <p className="font-bold text-[16px] text-[#BDBDBD] absolute bottom-2 left-8">
              00:00:00
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <ChessWidget />
      </div>
      <div className="flex justify-center py-10">
        <div className="flex gap-[24.2rem]">
          <div className="relative border-0 w-[43px] h-[43px] border-solid bg-[#383531] rounded-lg">
            <FaUserAlt className="text-[#BDBDBD] text-[30px] absolute bottom-[2px] left-[6px]" />
            <p className="font-bold text-[16px] text-[#BDBDBD] absolute bottom-2 left-12 w-20">
              My Avatar
            </p>
          </div>
          <div className="relative border-0 w-[129px] h-[43px] border-solid bg-[#383531] rounded-lg">
            <p className="font-bold text-[16px] text-[#BDBDBD] absolute bottom-2 left-8">
              00:00:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpectatedGamePlay;
