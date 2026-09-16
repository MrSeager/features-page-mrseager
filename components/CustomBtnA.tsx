interface CustomBtnAProps {
    name: string,
    classN: string,
}

export default function CustomBtnA({ name, classN }: CustomBtnAProps) {
    return  <button
                type="button"
                className={`cursor-pointer ${classN} font-semibold shadow-sm py-3 px-4 rounded-md outline-none duration-300
                            hover:shadow-lg
                            focus:shadow-lg`}
            >
                {name}
            </button>
}