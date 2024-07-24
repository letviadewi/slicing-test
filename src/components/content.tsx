import React from "react";
import { TbMessage2 } from "react-icons/tb";
import { GrNotification } from "react-icons/gr";
import { AiFillShop } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa6";

function Content() {
  return (
    <div>
      <div className="bg-[#FFFFFF] h-[62px] items-center font-inter border-t-0 border-l-0 border-r-0 border-b-[2px] mt-[37px] ml-[256px] flex justify-between py-[11px] pl-[40px] pr-[32px]">
        <div>Analisis</div>
        <div className="flex gap-3 items-center">
          <TbMessage2 size={22} />
          <GrNotification size={22} />
          <div className="h-8 border-l border-r border-gray-400"></div>
          <div className="flex items-center gap-2">
            <AiFillShop size={22} className="bg-[#EFEFF5]" />
            Roby Jaya
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <div className="mt-10">
          <div className="bg-[#FFFF] border-l-2 border-r-2 border-b-2 border-t-2 ml-[300px] w-[545px] h-[377px] font-inter rounded-lg">
            <div className="p-5">
              <div className="font-semibold text-[16px]">
                Ringkasan Performa
              </div>
              <div className="flex gap-2 justify-center mt-5">
                <div className="w-[230px] h-[122px] border-[2px] rounded-lg p-4">
                  <img
                    src="./images/image.png"
                    alt="images"
                    className="w-[28px] h-[28px]"
                  />
                  <div className="text-[#5F5D9C] text-[16px] font-inter">
                    Rata-rata pengiriman
                  </div>
                  <div className="text-[#4A4D4F] text-[22px] font-inter">0</div>
                </div>
                <div className="w-[230px] h-[122px] border-[2px] rounded-lg p-4">
                  <img
                    src="./images/performa.svg"
                    alt="images"
                    className="w-[28px] h-[28px]"
                  />
                  <div className="text-[#5F5D9C] text-[16px] font-inter">
                    Rata-rata performa
                  </div>
                  <div className="text-[#4A4D4F] text-[22px] font-inter">
                    0 %
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[480px] flex h-[122px] border-[2px] mt-5 rounded-lg p-4">
                  <div>
                    <img
                      src="./images/pembatalan.svg"
                      alt="images"
                      className="w-[28px] h-[28px]"
                    />
                    <div className="text-[#5F5D9C] text-[16px] font-inter">
                      Pembatalan Pengiriman
                    </div>
                    <div className="text-[#4A4D4F] text-[22px] font-inter">
                      0
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFF] border-l-2 border-r-2 border-b-2 border-t-2 ml-[300px] mt-4 w-[545px] h-[377px] rounded-lg">
            <div className="p-5">
              <div className="flex justify-between">
                <div className="font-semibold text-[16px]">Grafik Performa</div>
                <div className="border-l-2 border-r-2 border-b-2 border-t-2 rounded-2xl flex p-2 items-center w-[82px] h-[32px] gap-1 text-[#5F5D9C]">
                  {" "}
                  <FaCalendarDay size={12} /> Mei <RiArrowDropDownLine />
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-center">
                  <img src="./images/grafik.svg" alt="grafik" />
                </div>
                <div className="text-center font-inter">
                  <div className="font-semibold text-[16px]">
                    Grafik penghasilan belum tersedia
                  </div>
                  <div className="text-[14px]">
                    Kamu belum memiliki riwayat pemasukan dan pengeluaran
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFF] border-l-2 border-r-2 border-b-2 border-t-2 rounded-lg w-[547px] mt-10 h-[771px] mr-10">
          <div className="font-semibold text-[16px] m-5">
            Rata-rata layanan pengiriman
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <div>
              <div className="flex justify-center items-center">
                <img
                  src="./images/layanan.svg"
                  alt="rata-rata layanan pengiriman"
                  className="mx-auto"
                />
              </div>
              <div className="text-center mt-4 font-inter">
                <div className="font-semibold text-[16px]">
                  Grafik penghasilan belum tersedia
                </div>
                <div className="text-[14px]">
                  Kamu belum memiliki riwayat pemasukan dan pengeluaran
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
