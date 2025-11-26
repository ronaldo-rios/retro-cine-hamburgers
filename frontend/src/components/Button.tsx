import type { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  label: string
  variant: 'default' | 'outline' | 'categories'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ label, variant, ...rest }: ButtonProps) => {

  const variants: Record<ButtonProps["variant"], string> = {
    default: "bg-red-600 text-white",
    outline: "bg-white text-red-600 border border-red-600",
    categories: "bg-(--tertiary-color) text-black"
  }

  return (
    <button
      { ...rest }
      className={`w-full rounded-md cursor-pointer py-2 my-2 font-bold ${variants[variant]}`}
    >{label}</button>
  );
};

export default Button;