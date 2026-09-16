//Components
import Link from "next/link"

interface CustomLinkProps {
    name: string;
    linkHref: string;
}

export default function CustomLink({ name, linkHref }: CustomLinkProps) {
    return <Link
                href={linkHref}
                className="text-[#525252] font-semibold duration-300 outline-none
                            hover:text-shadow-md hover:text-black
                            focus:text-shadow-md focus:text-black"
            >
                {name}
            </Link>
}