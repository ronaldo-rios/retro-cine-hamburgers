import type { ButtonHTMLAttributes } from "react";

type Props = {
  label: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, onClick, ...rest }: Props) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className="bg-(--tertiary-color) text-black flex items-center justify-center rounded-sm cursor-pointer"
    >
      {label}
    </button>
  );
};

export default Button;