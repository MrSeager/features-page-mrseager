//Components
import Image from "next/image";
import SectionThreeItem from "./SectionThreeItem";
//Icons
import { RiHdLine, RiWaterPercentLine, RiRainbowLine, RiRocket2Line, RiP2pLine, RiCopyrightLine  } from "react-icons/ri";

export default function SectionThree() {
    return(
        <div className="z-3 grid lg:grid-cols-2 py-10 bg-white w-full shadow-md gap-5 px-5 lg:px-15">
            <div className="lg:col-span-2 flex flex-col items-center text-center justify-center gap-3 py-5">
                <h2 className="text-[#4438CA] text-sm font-semibold duration-300 hover:scale-105">High quaility images</h2>
                <h2 className="text-3xl md:text-5xl font-semibold duration-300 hover:scale-105">For designers, by designers</h2>
                <p className="text-[#525252] duration-300 hover:scale-105">
                    Unleash boundless creativity with a large repository of images optimized for designers
                </p>
            </div>
            <div className="flex flex-col items-start justify-between">
                <SectionThreeItem 
                    icon={<RiHdLine size={25} />}
                    title="5K resolution support"
                    text="All images boast a minimum resolution of 5K, ensuring crisp, cristal-clear quality."
                />
                <SectionThreeItem 
                    icon={<RiWaterPercentLine size={25} />}
                    title="From water to glass"
                    text="We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles icluding 3D and vector."
                />
                <SectionThreeItem 
                    icon={<RiRainbowLine size={25} />}
                    title="Portrait or landscape"
                    text="Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories."
                />
            </div>
            <div className="overflow-hidden aspect-5/3 flex items-center rounded-lg shadow-lg">
                <Image 
                    src={'/images/unsplash_rAtzDB6hWrU.jpg'}
                    alt="unsplash"
                    width={2304}
                    height={4096}
                    className="pointer-events-none"
                />
            </div>
            <div className="lg:col-span-2 flex flex-col items-center text-center justify-center gap-3 py-5">
                <h2 className="text-[#4438CA] text-sm font-semibold duration-300 hover:scale-105">Best-in-class support</h2>
                <h2 className="text-3xl md:text-5xl font-semibold duration-300 hover:scale-105">
                    Convenience and licensing<br className="hidden md:block" />
                    that empowers
                </h2>
                <p className="text-[#525252] duration-300 hover:scale-105">
                    In a word where storytelling constantly evolves,<br className="hidden md:block" />
                    don&apos;t let licensing and poor support hold you down.
                </p>
            </div>
            <div className="overflow-hidden aspect-5/3 flex items-center rounded-lg shadow-lg">
                <Image 
                    src={'/images/unsplash_rAtzDB6hWrU_1.jpg'}
                    alt="unsplash"
                    width={2304}
                    height={4096}
                    className="pointer-events-none"
                />
            </div>
            <div className="flex flex-col items-start justify-between">
                <SectionThreeItem 
                    icon={<RiRocket2Line  size={25} />}
                    title="Faster downloads"
                    text="Our robust servers are primed to deliver the highest resolution images swiftly, unsuring a smooth download experience."
                />
                <SectionThreeItem 
                    icon={<RiP2pLine size={25} />}
                    title="Convenience for teams"
                    text="Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity."
                />
                <SectionThreeItem 
                    icon={<RiCopyrightLine size={25} />}
                    title="Royalty-free licensing"
                    text="Our straightforward, royalty-free licensing means your shosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project."
                />
            </div>
        </div>
    );
}