//Components
import SectionTwoItem from "./SectionTwoItem";
//Icons
import { RiDownload2Line, RiBrushLine, RiCopyrightLine, RiRefund2Fill, RiTeamLine, RiLoopRightFill } from "react-icons/ri";

export default function SectionTwo() {
    return(
        <div className="z-2 grid md:grid-cols-2 lg:grid-cols-3 py-10 bg-white w-full shadow-md gap-3 px-5 lg:px-15">
            <div className="md:col-span-2 lg:col-span-3 flex flex-col items-center text-center justify-center gap-3 py-5">
                <h2 className="text-[#4438CA] text-sm font-semibold">Premium abstract images</h2>
                <h2 className="text-3xl md:text-5xl font-semibold">Easy access to top quality images</h2>
                <p className="text-[#525252]">
                    In a world where storytelling constantly evolves, we lead with groundbreaking images
                    <br />designed for your presentation excellence.
                </p>
            </div>
            <SectionTwoItem 
                icon={<RiDownload2Line size={25} />}
                title='Infinite Download'
                text="Once you subscribe to our plans, they're all, yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
            />
            <SectionTwoItem 
                icon={<RiBrushLine size={25} />}
                title='Purely Handcrafted'
                text="No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust."
            />
            <SectionTwoItem 
                icon={<RiCopyrightLine size={25} />}
                title='All Are Under licensed'
                text="The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as painting or print on paper)."
            />
            <SectionTwoItem 
                icon={<RiRefund2Fill size={25} />}
                title='Cencel Anytime'
                text="Subscribe at your own pace, and cancel when you feel it's enough."
            />
            <SectionTwoItem 
                icon={<RiTeamLine size={25} />}
                title='Empowering For Team'
                text="We support multiple seats at once, requiring only a single payment."
            />
            <SectionTwoItem 
                icon={<RiLoopRightFill size={25} />}
                title='No Limitations'
                text="Use as many as you want, from Dribbble presentations to PowerPoint presentations."
            />
        </div>
    );
}