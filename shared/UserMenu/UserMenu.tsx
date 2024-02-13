'use client';

import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "..";
import styles from './UserMenu.module.css'

const UserMenu = () => {
  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-4">
            <div className={`text-[1.6rem] font-semibold py-3 px-4 rounded-full 
                hover:bg-neutral-100 
                transition 
                cursor-pointer ${styles.mob_view}`}
            >
                <h3>Airbnb your home</h3>
            </div>
            <div className="p-4 md:p-2 border-[0.1rem] border-neutral-200 flex flex-row items-center cursor-pointer gap-3 rounded-full hover: shadow-md transition">
                <AiOutlineMenu />
                <div className={styles.mob_view}>
                    <Avatar />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserMenu