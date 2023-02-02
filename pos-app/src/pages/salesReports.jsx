import axios from "axios";
import { useRef, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import DisplayDate from "../components/displayDate";

export default function SalesReports() {
  return (
    <div
      className="p-5 bg-[#252836] overflow-y-auto w-[100vw]"
      style={{ fontFamily: "Barlow, sans-serif" }}
    >
      <div className="flex flex-row justify-between">
        <div className="mb-10">
          <h1 className="text-white font-bold text-3xl mb-1">Sales Report </h1>
          <DisplayDate />
        </div>
      </div>
      <div className="text-white h-auto flex m-[24px]">
        <div className="bg-[#1F1D2B] h-[143px] w-[199px] border-solid rounded-lg flex flex-col items-left p-[16px]">
          <div className="flex items-center">
            <div className="h-[38px] w-[38px] rounded-md bg-[#252836] flex items-center justify-center mr-[12px]">
              -
            </div>
            <div className="h-[17px] w-[46px] text-[12px] flex items-center justify-left">
              +32.40%
            </div>
          </div>
          <div className="mt-[8px] text-[28px] font-bold">$10,243.00</div>
          <div className="mt-[8px] text-[14px] text-[#ABBBC2]">
            Total Revenue
          </div>
        </div>
        <div className="bg-[#1F1D2B] h-[143px] w-[199px] border-solid rounded-lg flex flex-col items-left ml-[24px] p-[16px]">
          <div className="flex items-center">
            <div className="h-[38px] w-[38px] rounded-md bg-[#252836] flex items-center justify-center mr-[12px]">
              -
            </div>
            <div className="h-[17px] w-[46px] text-[12px] flex items-center justify-left">
              -12.40%
            </div>
          </div>
          <div className="mt-[8px] text-[28px] font-bold">23,456</div>
          <div className="mt-[8px] text-[14px] text-[#ABBBC2]">
            Total Dish Ordered
          </div>
        </div>
        <div className="bg-[#1F1D2B] h-[143px] w-[199px] border-solid rounded-lg flex flex-col items-left ml-[24px] p-[16px]">
          <div className="flex items-center">
            <div className="h-[38px] w-[38px] rounded-md bg-[#252836] flex items-center justify-center mr-[12px]">
              -
            </div>
            <div className="h-[17px] w-[46px] text-[12px] flex items-center justify-left">
              +2.40%
            </div>
          </div>
          <div className="mt-[8px] text-[28px] font-bold">1,234</div>
          <div className="mt-[8px] text-[14px] text-[#ABBBC2]">
            Total Customer
          </div>
        </div>
      </div>
      <div className="bg-[#1F1D2B] h-[506px] w-[646px] border-solid rounded-lg flex flex-col items-left m-[24px]"></div>
    </div>
  );
}
