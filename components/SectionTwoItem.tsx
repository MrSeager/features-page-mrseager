//Components
import { ReactNode } from "react";

interface SectionTwoItemProps {
    icon: ReactNode;
    title: string;
    text: string;
}

export default function SectionTwoItem({ icon, title, text }: SectionTwoItemProps) {
    return(
        <div className="text-center flex flex-col items-center justify-start md:px-5 py-5 gap-3 duration-300 hover:scale-105">
            <span className="bg-white shadow-md rounded-full p-2 aspect-1/1 text-[#4438CA]">{icon}</span>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-[#525252] text-pretty">{text}</p>
        </div>
    )
}