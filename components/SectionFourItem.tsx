//Components
import Image from "next/image";

interface SectionFourItemProps {
    img: string;
    name: string;
    userName: string;
    text: string;
}

export default function SectionFourItem({ img, name, userName, text }: SectionFourItemProps) {
    return(
        <div className="flex flex-col items-start p-5 gap-3 rounded-md shadow-md ring ring-[#525252]/25 duration-300 hover:scale-103">
            <div className="flex gap-3 items-center justify-start w-full">
                <div className="aspect-1/1 rounded-full overflow-hidden">
                    <Image 
                        src={img}
                        alt="profile-thumbnail"
                        width={50}
                        height={50}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <h4 className="text-md text-[#525252]">{userName}</h4>
                </div>
            </div>
            <p className="text-[#525252] text-pretty">{text}</p>
        </div>
    );
}