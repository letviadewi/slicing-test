import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

function SlicingTest() {
  return (
    <div>
        <div className='bg-[#5F5D9C] flex justify-between w-full text-[14px] font-inter px-10 text-white items-center fixed top-0 h-[37px]'>
            <div>Download Super App</div>
            <div>
                <ul className='flex gap-4'>
                    <li>
                        Bantuan
                    </li>
                    <li>
                        Tentang Super App
                    </li>
                    <li>
                        Diskon
                    </li>
                    <li className='flex items-center'>
                        Bahasa Indonesia <RiArrowDropDownLine size={20} />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SlicingTest