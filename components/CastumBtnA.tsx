interface CastumBtnAProps {
    name: string,
    classN: string,
}

export default function CastumBtnA({ name, classN }: CastumBtnAProps) {
    return  <button
                type="button"
                className={`cursor-pointer ${classN} font-semibold shadow-sm py-3 px-4 rounded-md outline-none duration-300
                            hover:shadow-lg
                            focus:shadow-lg`}
            >
                {name}
            </button>
}