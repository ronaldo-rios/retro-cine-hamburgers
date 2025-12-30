import type { InputHTMLAttributes } from "react"

type FormFieldProps = {
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ error, ...props }: FormFieldProps) => {
    return (
        <>
        <input 
            {...props}
            className="w-full lg:w-150 text-sm px-2 py-2 my-2 outline-none rounded-md bg-white placeholder-gray-500" 
        />
        {error && (
            <span className="text-red-500 text-xs mt-1 block">{error}</span>
        )}
      </>
    )
}

export default Input