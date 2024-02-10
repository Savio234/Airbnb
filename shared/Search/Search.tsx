'use client';
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[0.1rem] py-2 rounded-full px-4
        shadow-sm 
        hover:shadow-md 
        transition "
    >
        <div className="flex flex-row items-center justify-between">
            <div className="text-[1.6rem] cursor-pointer font-semibold px-6">
                <h3>Anywhere</h3>
            </div>
            <div className="text-[1.6rem] font-semibold cursor-pointer px-6 flex-1 border-x-[0.1rem] text-center">
                <h3>Anyweek</h3>
            </div>
            <div className="text-[1.6rem] pl-6 pr-4 cursor-pointer text-gray-600 flex flex-row items-center gap-4">
                <div className=" ">
                    <h3>Add Guests</h3>
                </div>
                <div className="p-2 bg-rose-500 cursor-pointer rounded-full text-white ">
                     <BiSearch size={16} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search