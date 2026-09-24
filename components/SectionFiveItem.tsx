'use client'
//Components
import { useState } from "react";
//Icons
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

interface SectionFiveItemProps {
    question: string; 
    answer: string;
}

export default function SectionFiveItem({ question, answer }: SectionFiveItemProps) {
    const [open, setOpen] = useState<boolean>(false);

    return(
        <div className="flex flex-col gap-2 py-3 duration-300 ease-in-out">
            <button 
                className="outline-none group cursor-pointer text-lg font-semibold flex items-center justify-between duration-300 ease-in-out hover:scale-101 focus:scale-101"
                onClick={() => setOpen(!open)}
            >    
                {question}
                <span className="group-active:rotate-50 duration-300">
                    {!open ? 
                    <RiAddCircleLine size={20} />
                    :
                    <RiIndeterminateCircleLine size={20} />
                    }
                </span>
            </button>
            <div 
                className={`overflow-hidden ease-in-out duration-300
                            ${open ? 'max-h-100' : 'max-h-0'}`}
            >
                <p className="text-[#525252] text-pretty">{answer}</p>
            </div>
        </div>
    );
}