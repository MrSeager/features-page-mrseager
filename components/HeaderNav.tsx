'use client';
//Components
import { useState } from "react";
import Image from "next/image";
import CustomLink from "./CustomLink";
import CustomBtnA from "./CustomBtnA";
//Icons
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

export default function HeaderNav() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return(
        <header className="max-w-[120rem] w-full flex flex-col lg:flex-row items-center justify-between py-3 px-5 lg:px-20 lg:gap-45">
            <div className="flex items-center justify-between w-full lg:w-auto">
                <Image 
                    src={'/images/abstractly.png'}
                    alt="logo"
                    className="pointer-events-none"
                    width={200}
                    height={34}
                />
                <button
                    type="button"
                    className="lg:hidden text-[#525252] outline-none duration-300
                                active:rotate-90"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {!menuOpen ?
                        <HiMenu size={40} />
                    :
                        <CgClose size={40} />
}                   
                </button>
            </div>
            <div 
                className={`overflow-hidden flex flex-col lg:flex-row items-center justify-between w-full gap-3 ease-in-out duration-400
                        lg:max-h-screen    
                        ${menuOpen ? 'max-h-screen py-3' : 'max-h-0 py-0'}`}
            >
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
                    <CustomLink 
                        name="Home"
                        linkHref="/"
                    />
                    <CustomLink 
                        name="Features"
                        linkHref="/"
                    />
                    <CustomLink 
                        name="Pricing"
                        linkHref="/"
                    />
                    <CustomLink 
                        name="About us"
                        linkHref="/"
                    />
                    <CustomLink 
                        name="Contacts"
                        linkHref="/"
                    />
                </div>
                <div className="flex items-center gap-5 py-5">
                    <CustomBtnA
                        name="Learn more"
                        classN='bg-white text-black'
                    />
                    <CustomBtnA
                        name="See pricong"
                        classN='bg-[#4438CA] text-white'
                    />
                </div>
            </div>
        </header>
    );
}