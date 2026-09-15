'use client';
//Components
import { useState } from "react";
import Image from "next/image";
import CastumLink from "./CastumLink";
import CastumBtnA from "./CastumBtnA";
//Icons
import { HiMenu } from "react-icons/hi";

export default function HeaderNav() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return(
        <header className="max-w-[120rem] w-full flex flex-col lg:flex-row items-center justify-between px-10 lg:gap-45">
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
                    className="lg:hidden text-[#525252]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <HiMenu size={40} />
                </button>
            </div>
            <div 
                className={`overflow-hidden flex flex-col lg:flex-row items-center justify-between w-full gap-3 ease-in-out duration-400
                        lg:max-h-screen    
                        ${menuOpen ? 'max-h-screen py-3' : 'max-h-0 py-0'}`}
            >
                <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5">
                    <CastumLink 
                        name="Home"
                        linkHref="/"
                    />
                    <CastumLink 
                        name="Features"
                        linkHref="/"
                    />
                    <CastumLink 
                        name="Pricing"
                        linkHref="/"
                    />
                    <CastumLink 
                        name="About us"
                        linkHref="/"
                    />
                    <CastumLink 
                        name="Contacts"
                        linkHref="/"
                    />
                </div>
                <div className="flex items-center gap-5 py-5">
                    <CastumBtnA
                        name="Learn more"
                        classN='bg-white text-black'
                    />
                    <CastumBtnA
                        name="See pricong"
                        classN='bg-[#4438CA] text-white'
                    />
                </div>
            </div>
        </header>
    );
}