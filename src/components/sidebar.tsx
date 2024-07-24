import React from "react";
import { RiHome8Fill } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { PiMapPinLineFill } from "react-icons/pi";
import { IoCarSharp } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { RiWallet3Fill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="w-[255px] font-inter fixed h-screen top-[37px] left-[1px] gap-[35px] border-t-0 border-r-2 border-b-0 border-l-0 p-[21px] pr-[24px] pb-[56px] pl-[16px]">
      <div className="text-[#1454B8] text-center font-semibold text-[24px]">
        SUPER <span className="text-[#E52427]">APP</span>
      </div>
      <div className="w-[270px] h-[338px] gap-[5px] p-4">
        <ul>
          <li>
            <Link href={"#"} className="flex items-center p-2 mt-1 text-[#B0B3C9]">
              <RiHome8Fill size={22} className="mr-2" /> Dashboard
            </Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center p-2 text-[#B0B3C9]">
              <TbNotes size={22} className="mr-2" /> Pesanan Pelanggan
            </Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center p-2 text-[#B0B3C9]">
              <PiMapPinLineFill size={22} className="mr-2" /> Proses Pengiriman
            </Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center p-2 text-[#B0B3C9]">
              <IoCarSharp size={22} className="mr-2" /> Kendaraan & Driver
            </Link>
          </li>
          <li className="bg-[#E7E7F0] rounded-lg h-10 w-52">
            <Link href={"#"} className="flex items-center p-2 text-[#5F5D9C] ">
              <FaChartLine size={22} className="mr-2" /> Analisis
            </Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center p-2 text-[#B0B3C9]">
              <RiWallet3Fill size={22} className="mr-2" /> Keuangan
            </Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center p-2 text-[#B0B3C9]">
              <AiFillLike size={22} className="mr-2" /> Rating & Ulasan
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
