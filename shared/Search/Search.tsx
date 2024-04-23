'use client';
import { BiSearch } from "react-icons/bi";
import styles from './Search.module.css'

const Search = () => {
  return (
    <div className="border-[0.1rem] py-2 rounded-full px-4 shadow-sm hover:shadow-md 
        transition"
    >
        <div className={`flex flex-row items-center justify-between ${styles.wrapper}`}>
            <div className={`text-[1.6rem] cursor-pointer font-semibold px-6 ${styles.text}`}>
                <h3>Anywhere</h3>
            </div>
            <div className={`text-[1.6rem] font-semibold cursor-pointer px-6 flex-1 
                border-x-[0.1rem] text-center ${styles.text}`}
            >
                <h3>Anyweek</h3>
            </div>
            <div className={`flex text-[1.6rem] pl-6 pr-4 cursor-pointer text-gray-600 flex 
                flex-row items-center gap-8 ${styles.text}`}
            >
                <div className={styles.add_guests}>
                    <h3>Add Guests</h3>
                </div>
                <div className="p-3 bg-rose-500 cursor-pointer rounded-full text-white">
                    <BiSearch size={12} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search