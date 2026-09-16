//Components
import Image from "next/image";
import CustomBtnA from "./CustomBtnA";
//Icons
import { IoMdCheckmark } from "react-icons/io";

export default function SectionOne() {
    return(
        <div className="z-1 bg-white grid lg:grid-cols-2 items-center px-15 py-20 w-full rounded-t-md shadow-md">
            <div className="flex flex-col items-start gap-10">
                <h1 className="text-[65px] font-semibold text-base/13">
                    Premium <br className="block md:hidden lg:block" />
                    abstract images
                </h1>
                <ul className="text-[#525252] text-base/9">
                    <li className="flex items-center gap-2"><IoMdCheckmark className="rounded-full bg-[#4438CA]/25 text-[#4438CA]" />Minimum 5K image resolution</li>
                    <li className="flex items-center gap-2"><IoMdCheckmark className="rounded-full bg-[#4438CA]/25 text-[#4438CA]" />Various format variants available</li>
                    <li className="flex items-center gap-2"><IoMdCheckmark className="rounded-full bg-[#4438CA]/25 text-[#4438CA]" />Retina display support</li>
                </ul>
                <div className="flex gap-2">
                    <CustomBtnA
                        name="Learn more"
                        classN='bg-white text-black px-5'
                    />
                    <CustomBtnA
                        name="See pricing"
                        classN='bg-[#4438CA] text-white px-5'
                    />
                </div>
            </div>
            <div>
                <Image 
                    src={'/images/prism.png'}
                    alt="prism"
                    width={1392}
                    height={1052}
                />
            </div>
        </div>
    );
}