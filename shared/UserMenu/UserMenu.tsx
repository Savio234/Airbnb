'use client';
import { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar, MenuItem } from "..";
import styles from './UserMenu.module.css'

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const menuRef = useRef<HTMLDivElement>(null);
	const refNode = menuRef.current;
    const toggleOpen = () => {
        setIsOpen(isOpen => !isOpen)
    }

    useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (refNode && !refNode.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [refNode]);

  return (
    <div ref={menuRef} className="relative">
        <div className="flex flex-row items-center gap-4">
            <div className={`text-[1.6rem] font-semibold py-3 px-4 rounded-full 
                hover:bg-neutral-100 
                transition 
                cursor-pointer ${styles.mob_view}`}
            >
                <h3>Airbnb your home</h3>
            </div>
            <div className="p-4 md:p-2 border-[0.1rem] border-neutral-200 flex flex-row 
                items-center cursor-pointer gap-3 rounded-full hover: shadow-md transition"
                onClick={toggleOpen}
            >
                <AiOutlineMenu />
                <div className={styles.mob_view}>
                    <Avatar />
                </div>
            </div>
        </div>
        {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[10vw] bg-white top-16 left-16 text-sm">
                <div className="flex flex-col cursor-pointer">
                    <MenuItem onclick={() => {}} label="Login" />
                    <MenuItem onclick={() => {}} label="Sign Up" />
                </div>
            </div>
        )}
    </div>
  )
}

export default UserMenu