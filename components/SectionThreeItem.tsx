//Components
import { ReactNode } from "react";

interface SectionThreeItemProps {
    icon: ReactNode;
    title: string;
    text: string;
}

export default function SectionThreeItem({ icon, title, text }: SectionThreeItemProps) {
    return(
        <div className="flex items-start justify-start gap-5 duration-300 hover:scale-103">
            <span className="bg-white shadow-md rounded-full p-2 aspect-1/1 text-[#4438CA]">{icon}</span>
            <div className="flex flex-col gap-3 py-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-[#525252] text-pretty">{text}</p>
            </div>
        </div>
    );
}