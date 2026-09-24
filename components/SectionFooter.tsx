'use client';
//Components
import { useState } from "react";
import Link from "next/link";
import CustomBtnA from "./CustomBtnA";
import CustomLink from "./CustomLink";
//Icons
import { RiBuildingLine, RiPhoneLine, RiMailLine, RiYoutubeLine, RiInstagramLine, RiFacebookBoxLine, RiGithubLine, RiTwitterXFill } from "react-icons/ri";

export default function SectionFooter() {
    const [message, setMessage] = useState<string>("");

    return(
        <footer className="z-6 flex flex-col lg:grid grid-cols-2 bg-white w-full shadow-xl gap-3 py-20 px-5 lg:px-15 rounded-b-md">
            <div className="flex flex-col gap-3">
                <h5 className="text-4xl md:text-6xl font-semibold duration-300 hover:scale-102">Talk to our team</h5>
                <p className="text-[#525252] text-pretty duration-300 hover:scale-102">We&apos;re committed to delivering the support you require to make experience as smooth as possible.</p>
            
                <ul className="text-base/15 pt-5">
                    <li className="flex items-center gap-2 duration-300 hover:scale-102"><span className="bg-white shadow-md rounded-full p-2 aspect-1/1 text-[#4438CA]"><RiBuildingLine size={25} /></span> 123 Maple Street, Springfield, IL, USA</li>
                    <li className="flex items-center gap-2 duration-300 hover:scale-102"><span className="bg-white shadow-md rounded-full p-2 aspect-1/1 text-[#4438CA]"><RiPhoneLine size={25} /></span>+1 (650) 555-0198</li>
                    <li className="flex items-center gap-2 duration-300 hover:scale-102"><span className="bg-white shadow-md rounded-full p-2 aspect-1/1 text-[#4438CA]"><RiMailLine  size={25} /></span>hello@abstractly.com</li>
                </ul>
            </div>
            <div className="lg:p-5">
                <form className="grid grid-cols-2 gap-5 ring ring-[#525252]/25 shadow-md p-5 rounded-md duration-300 ease-in-out hover:scale-101 hover:shadow-lg">
                    <div className="flex flex-col ">
                        <label htmlFor="name">Name</label>
                        <input 
                            id="name"
                            type="text"
                            className="px-3 py-2 border rounded-sm bg-[#525252]/5 border-[#525252]/25"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="flex flex-col ">
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            type="email"
                            className="px-3 py-2 border rounded-sm bg-[#525252]/5 border-[#525252]/25"
                            placeholder="example@example.com"
                        />
                    </div>
                    <div className="flex flex-col col-span-2">
                        <label htmlFor="text">Message</label>
                        <textarea 
                            id="text"
                            className="px-3 py-2 border rounded-sm bg-[#525252]/5 border-[#525252]/25"
                            placeholder="Write your message..."
                            maxLength={500}
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <p className="text-[#525252] text-end">{message.length}/500</p>
                    </div>
                    <CustomBtnA 
                        name="Submit"
                        classN='bg-[#4438CA] text-white px-5 col-span-2'
                    />
                </form>
            </div>
            <div className="py-15 col-span-2 flex flex-col gap-3 items-center">
                <div className="flex gap-5">
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
                        name="Contact"
                        linkHref="/" 
                    />
                </div>
                <div className="flex gap-5 mt-5">
                    <Link
                        href={'/'}
                        className="outline-none text-[#525252] duration-300 hover:scale-110 focus:scale-110" 
                    >
                        <RiYoutubeLine size={25} />
                    </Link>
                    <Link
                        href={'/'}
                        className="outline-none text-[#525252] duration-300 hover:scale-110 focus:scale-110" 
                    >
                        <RiInstagramLine size={25} />
                    </Link>
                    <Link
                        href={'/'}
                        className="outline-none text-[#525252] duration-300 hover:scale-110 focus:scale-110" 
                    >
                        <RiFacebookBoxLine size={25} />
                    </Link>
                    <Link
                        href={'/'}
                        className="outline-none text-[#525252] duration-300 hover:scale-110 focus:scale-110" 
                    >
                        <RiGithubLine size={25} />
                    </Link>
                    <Link
                        href={'/'}
                        className="outline-none text-[#525252] duration-300 hover:scale-110 focus:scale-110" 
                    >
                        <RiTwitterXFill size={25} />
                    </Link>
                </div>
                <p>&copy; 2024 Abstractly, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}