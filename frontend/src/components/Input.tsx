import type { InputHTMLAttributes } from "react"

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input 
            {...props}
            className="w-full lg:w-150 text-sm px-2 py-2 my-2 outline-none rounded-md bg-white placeholder-gray-500" 
        />
    )
}

export default Input