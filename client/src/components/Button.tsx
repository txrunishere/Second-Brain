import type { ReactElement, ReactNode } from "react";

type ButtonPropType = {
  varient: "primary" | "secondary";
  children: ReactNode;
  icon?: ReactElement;
  className?: string;
  type: "submit" | "button";
  handler?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined,
  value?: string
};

const varientStyles = {
  primary: "bg-[#5046E4] text-white",
  secondary: "bg-[#d3deff] text-[#4B44B8]",
};

export default function Button({
  children,
  icon,
  varient,
  className = "",
  type,
  handler,
  value,
  ...props
}: ButtonPropType) {
  return (
    <button
      value={value}
      onClick={handler}
      type={type}
      className={`${varientStyles[varient]} ${className} ${
        icon ? "gap-2" : ""
      } cursor-pointer rounded px-2 py-1 flex  items-center justify-center font-medium`}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}
